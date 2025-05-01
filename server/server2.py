from contextlib import asynccontextmanager
from enum import Enum
from typing import Annotated
from fastapi import Depends, FastAPI, Query, HTTPException
from pydantic import BaseModel
from sqlmodel import Field, Session, SQLModel, select
from fastapi.middleware.cors import CORSMiddleware

from server.database import create_db_and_tables, engine


class Category(str, Enum):
    smartphone = "Smartphone"
    laptop = "Laptop"
    tablet = "Tablet"
    tv = "TV"
    audio = "Audio"
    pc_component = "PC-component"


class SmartphoneSpecs(BaseModel):
    screen_diagonal_inch: int
    screen_resolution: str
    matrix_type: str
    screen_refresh_rate_gz: int
    number_of_sim_cards: int
    sim_cards_format: str
    ram_gb: int
    builtin_memory_gb: int
    cd_cards_format: str
    cd_cards_max_size_gb: int
    combo_slot: bool
    operating_system: str


# TODO: Make TechnicalSpecification class
class ProductBase(SQLModel):
    name: str = Field(index=True)
    price: float = Field(index=True)
    category: Category = Field(index=True)
    quantity: int = Field(index=True)
    manufacturer: str = Field(index=True)
    warranty_period: int = Field(index=True)
    # imgUrl: str | None = Field(default=None, index=True)
    # TODO: Should i add img to product?


class Product(ProductBase, table=True):
    id: int | None = Field(default=None, primary_key=True)


class ProductPublic(ProductBase):
    id: int


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

# origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
def update_product(product_id: int, product: ProductBase, session: SessionDep):
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


@app.get("/categories/")
def get_categories():
    pass
