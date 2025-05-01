from sqlalchemy import Column
from sqlalchemy.dialects.sqlite import JSON
from sqlmodel import Field, SQLModel
from typing import Optional, Dict, Any


class Product(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    type: str
    manufacturer: str
    price: float
    quantity: int
    warranty_months: int
    specs: Dict[str, Any] = Field(sa_column=Column(JSON))
