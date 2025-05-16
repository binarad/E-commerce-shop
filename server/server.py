from contextlib import asynccontextmanager
from typing import Annotated, Dict
from fastapi import Depends, FastAPI, HTTPException, Query
from sqlmodel import Session, select
from database import engine, create_db_and_tables
from models import Product
from schemas import ProductCreate, ProductPublic
from fastapi.middleware.cors import CORSMiddleware


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


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]


@app.post("/products/", response_model=ProductPublic)
def create_product(product: ProductCreate, session: SessionDep):
    db_product = Product(
        name=product.name,
        type=product.type,
        manufacturer=product.manufacturer,
        price=product.price,
        quantity=product.quantity,
        warranty_months=product.warranty_months,
        specs=product.specs.model_dump(),
    )
    session.add(db_product)
    session.commit()
    session.refresh(db_product)
    return db_product


# Get Products List
@app.get("/products/", response_model=list[ProductPublic])
def get_products_list(
    session: SessionDep, offset: int = 0, limit: Annotated[int, Query(le=1000)] = 1000
):
    products = session.exec(select(Product).offset(offset).limit(limit))
    return products


# Get Data For 1 Product
@app.get("/products/{product_id}", response_model=ProductPublic)
def get_product(product_id: int, session: SessionDep):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


# Update Product
@app.patch("/products/{product_id}", response_model=ProductPublic)
def update_product(product_id: int, product: ProductPublic, session: SessionDep):
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
@app.delete("/products/{product_id}", response_model=ProductPublic)
def delete_product(product_id: int, session: SessionDep):
    product = session.get(Product, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    session.delete(product)
    session.commit()
    return product


available_categories = {
    "smartphone": "Smartphone",
    "laptop": "Laptop",
    "tablet": "Tablet",
    "tv": "TV",
}


@app.get("/categories/", response_model=Dict[str, str])
def get_categories():
    return available_categories
