// Base type for all product specs
interface ProductBase {
	name: string
	manufacturer: string
	price: number
	quantity: number
	warranty_months: number
}

// --- Smartphone specs ---
interface SmartphoneSpecs {
	screen_size: number
	matrix_type: string
	screen_refresh_rate_gz: number
	number_of_sim_cards: number
	sim_cards_format: string
	ram_gb: number
	storage_size: number
	cd_card_support: boolean
	cd_card_format: string
	cd_card_max_size: string
	combo_slot: boolean
	front_camera_quality_mp: number
	front_camera_features: string
	front_camera_placement: string
	front_camera_recording_specs: string[]
	front_camera_additional_features: string[]
	main_camera_quality_mp: number
	main_camera_features: string
	main_camera_placement: string
	main_camera_recording_specs: string[]
	main_camera_additional_features: string[]
	cpu: string
	core_type: string
	number_of_cpu_cores: number
	core_series: string
	core_frequency_ghz: number
	battery_capacity_mah: number
	dust_moisure_protection: string
	delivery_set: string[]
	wireless_technologies: string[]
	color: string
}

// --- Laptop specs ---
export interface LaptopSpecs {
	screen_size: number
	screen_refresh_rate_gz: number
	screen_resolution: string
	matrix_type: string
	cpu: string
	cpu_generation: string
	cpu_frequency_ghz: number
	gpu: string
	gpu_storage_size_gb: number
	gpu_type: string
	ram_gb: number
	ram_type: string
	ram_frequency_ghz: number
	storage: string
	storage_type: string
	color: string
	weight_kg: number
	size: string
	network_adapters: string[]
	usb_ports: string[]
	video_ports: string[]
	audio_ports: string[]
	wireless_connections: string[]
	delivery_set: string[]
	os: string
}

// --- Tablet specs (inherits from Smartphone but overrides some fields) ---
interface TabletSpecs
	extends Omit<
		SmartphoneSpecs,
		'cd_card_support' | 'cd_card_format' | 'cd_card_max_size' | 'combo_slot'
	> {
	cd_card_support: boolean
	cd_card_format: string
	cd_card_max_size: string
	combo_slot: boolean
}

// --- TV specs ---
interface TVSpecs {
	screen_size: number
	smart_tv_support: boolean
	smart_tv: string
	os: string
	screen_resolution: string
	screen_refresh_rate_ghz: number
	ports: string[]
	wireless_connections: string[]
	border_color: string
	additional_specs: string[]
}

// --- Product variants ---
interface SmartphoneProduct extends ProductBase {
	id: number
	type: 'smartphone'
	specs: SmartphoneSpecs
}

interface LaptopProduct extends ProductBase {
	id: number
	type: 'laptop'
	specs: LaptopSpecs
}

interface TabletProduct extends ProductBase {
	id: number
	type: 'tablet'
	specs: TabletSpecs
}

interface TVProduct extends ProductBase {
	id: number
	type: 'tv'
	specs: TVSpecs
}

// Generic type from DB when specs are unknown (e.g., for generic rendering)
interface ProductPublic extends ProductBase {
	id: number
	type: string
	specs: Record<string, any>
}

// Union type to represent any known product
export type ProductType =
	| SmartphoneProduct
	| LaptopProduct
	| TabletProduct
	| TVProduct
