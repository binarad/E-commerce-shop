from pydantic import BaseModel, Field
from typing import Annotated, Union, Literal, List, Dict, Any


# Спецификации для разных типов
class SmartphoneSpecs(BaseModel):
    screen_size: float
    matrix_type: str
    screen_refresh_rate_gz: float
    number_of_sim_cards: int
    sim_cards_format: str
    ram_gb: int
    storage_size: int
    cd_card_support: bool
    cd_card_format: str
    cd_card_max_size: str
    combo_slot: bool
    front_camera_quality_mp: float
    front_camera_features: str
    front_camera_placement: str
    front_camera_recording_specs: List[str]
    front_camera_additional_features: List[str]
    main_camera_quality_mp: float
    main_camera_features: str
    main_camera_placement: str
    main_camera_recording_specs: List[str]
    main_camera_additional_features: List[str]
    cpu: str
    core_type: str
    number_of_cpu_cores: int
    core_series: str
    core_frequency_ghz: float
    battery_capacity_mah: float
    dust_moisure_protection: str
    delivery_set: List[str]
    wireless_technologies: List[str]
    color: str


class LaptopSpecs(BaseModel):
    screen_size: float
    screen_refresh_rate_gz: float
    screen_resolution: str
    matrix_type: str
    cpu: str
    cpu_generation: str
    cpu_frequency_ghz: float
    gpu: str
    gpu_storage_size_gb: float
    gpu_type: str
    ram_gb: int
    ram_type: str
    ram_frequency_ghz: float
    storage: int
    storage_type: str
    color: str
    weight_kg: float
    size: str
    network_adapters: List[str]
    usb_ports: List[str]
    video_ports: List[str]
    audio_ports: List[str]
    wireless_connections: List[str]
    delivery_set: List[str]
    os: str


class TabletSpecs(BaseModel):
    screen_size: float
    matrix_type: str
    screen_refresh_rate_gz: float
    ram_gb: int
    storage_size: int
    cd_card_support: bool
    cd_card_format: str
    cd_card_max_size: str
    front_camera_quality_mp: float
    front_camera_features: str
    front_camera_placement: str
    front_camera_recording_specs: List[str]
    front_camera_additional_features: List[str]
    main_camera_quality_mp: float
    main_camera_features: str
    main_camera_placement: str
    main_camera_recording_specs: List[str]
    main_camera_additional_features: List[str]
    cpu: str
    core_type: str
    number_of_cpu_cores: int
    core_series: str
    core_frequency_ghz: float
    battery_capacity_mah: float
    dust_moisure_protection: str
    delivery_set: List[str]
    wireless_technologies: List[str]
    color: str


class TVSpecs(BaseModel):
    screen_size: float
    smart_tv_support: bool
    smart_tv: str
    os: str
    screen_resolution: str
    screen_refresh_rate_ghz: float
    ports: List[str]
    wireless_connections: List[str]
    border_color: str
    additional_specs: List[str]


# Общая базовая модель продукта
class ProductBase(BaseModel):
    name: str
    manufacturer: str
    price: float
    quantity: int
    warranty_months: int


# Специализированные модели продуктов
class SmartphoneProduct(ProductBase):
    type: Literal["smartphone"]
    specs: SmartphoneSpecs


class LaptopProduct(ProductBase):
    type: Literal["laptop"]
    specs: LaptopSpecs


class TabletProduct(ProductBase):
    type: Literal["tablet"]
    specs: TabletSpecs


class TVProduct(ProductBase):
    type: Literal["tv"]
    specs: TVSpecs


class ProductPublic(ProductBase):
    id: int
    type: str
    specs: Dict[str, Any]


# Union всех возможных товаров
ProductCreate = Annotated[
    Union[SmartphoneProduct, LaptopProduct, TabletProduct, TVProduct],
    Field(discriminator="type"),
]

# Модель для чтения из БД
