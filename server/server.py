from typing import Annotated
from fastapi import Depends, FastAPI, Query

# from pydantic import BaseModel
from sqlmodel import Field, Session, SQLModel, create_engine, select


class Product(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    price: float = Field(index=True)
    imgUrl: str | None = Field(default=None, index=True)
    quantity: int = Field(index=True)


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

app = FastAPI()


@app.on_event("startup")
def on_startup():
    create_db_and_tables()


@app.get("/")
async def root():
    return {"message": "Hello world"}


@app.post("/products/")
def create_product(product: Product, session: SessionDep) -> Product:
    session.add(product)
    session.commit()
    session.refresh(product)

    return product


@app.get("/products")
def get_products_list(
    session: SessionDep, offset: int = 0, limit: Annotated[int, Query(le=100)] = 100
) -> list[Product]:
    products = session.exec(select(Product).offset(offset).limit(limit).all())
    return products


# @app.get("/products/")
# async def get_products(skip: int = 0, limit: int = 10):
#     return fake_item_db[skip : skip + limit]


# @app.post("/products/")
# async def create_product(product: Product):
#     fake_item_db.append(product)
#     return product
