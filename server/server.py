from contextlib import asynccontextmanager
from typing import Annotated
from fastapi import Depends, FastAPI, Query, HTTPException
from sqlmodel import Field, Session, SQLModel, create_engine, select
from fastapi.middleware.cors import CORSMiddleware


class ProductBase(SQLModel):
    name: str = Field(index=True)
    price: float = Field(index=True)
    imgUrl: str | None = Field(default=None, index=True)
    quantity: int = Field(index=True)


class Product(ProductBase, table=True):
    id: int | None = Field(default=None, primary_key=True)


class ProductPublic(ProductBase):
    id: int


class ProductUpdate(ProductBase):
    name: str | None = None
    price: float | None = None
    imgUrl: str | None = None
    quantity: int | None = None


sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

connect_args = {"check_same_thread": False}
engine = create_engine(sqlite_url, connect_args=connect_args)


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]


@asynccontextmanager
async def lifespan(app: FastAPI):
    print("Initializing DB and Tables...")
    create_db_and_tables()

    yield

    print("App is shutting down...")


app = FastAPI(lifespan=lifespan)

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello world"}


# Create Product
@app.post("/products/", response_model=ProductPublic)
def create_product(product: ProductBase, session: SessionDep):
    db_product = Product.model_validate(product)
    session.add(db_product)
    session.commit()
    session.refresh(db_product)
    return db_product


# Get Products List
@app.get("/products/", response_model=list[ProductPublic])
def get_products_list(
    session: SessionDep, offset: int = 0, limit: Annotated[int, Query(le=100)] = 100
):
    products = session.exec(select(Product).offset(offset).limit(limit))
    return products


# Get Data For 1 Product?


# Update Product
@app.patch("/products/{product_id}", response_model=ProductPublic)
def update_product(product_id: int, product: ProductUpdate, session: SessionDep):
    product_db = session.get(Product, product_id)
    if not product_db:
        raise HTTPException(status_code=404, detail="Product not found")
    product_data = product.model_dump(exclude_unset=True)
    product_db.sqlmodel_update(product_data)
    session.add(product_db)
    session.commit()
    session.refresh(product_db)
    return product_db


# Delete Product
@app.delete("/products/{product_id}")
def delete_product(product_id: int, session: SessionDep):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    session.delete(product)
    session.commit()
    return product
