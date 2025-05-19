// import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
// import { SmartphoneSpecs } from '../../productData.type'
// interface SmartphoneSpecsProps {
// 	specs: SmartphoneSpecs
// 	setSpecs: React.Dispatch<React.SetStateAction<SmartphoneSpecs>>
// }
// export default function SmartphoneSpecsComp(props: SmartphoneSpecsProps) {
// 	return (
// 		<div className='box-border flex flex-col'>
// 			<h1 className='text-2xl'>Screen</h1>
// 			<TextField type='number' variant='standard' label='Screen size (inch)' />
// 			<TextField
// 				type='number'
// 				variant='standard'
// 				label='Screen refresh rate (ghz)'
// 			/>
// 			<TextField type='number' variant='standard' label='Screen resolution' />
// 			<TextField variant='standard' label='Matrix type' />
// 			<TextField type='number' variant='standard' label='Number of sim cards' />
// 			<TextField variant='standard' label='Sim cards format' />
// 			<h1 className='text-2xl'>CPU</h1>
// 			<TextField variant='standard' label='CPU' />
// 			<TextField variant='standard' label='CPU core type' />
// 			<TextField variant='standard' label='CPU series' />
// 			<TextField type='number' variant='standard' label='CPU frequency (ghz)' />
// 			<TextField type='number' variant='standard' label='Number of cpu cores' />
// 			<h1 className='text-2xl'>RAM</h1>
// 			<TextField type='number' variant='standard' label='RAM size (gb)' />
// 			<TextField variant='standard' label='RAM type' />
// 			<TextField type='number' variant='standard' label='RAM frequency (ghz)' />
// 			<h1 className='text-2xl'>Storage</h1>
// 			<TextField type='number' variant='standard' label='Storage size (gb)' />
// 			<TextField type='checkbox' variant='standard' label='Cd card support' />
// 			<TextField variant='standard' label='Cd card format' />
// 			{/* <TextField type='checkbox' variant='standard' label='Combo slot' /> */}
// 			<div className='my-5 gap-2 w-[300px] '>
// 				<InputLabel id='combo-slot'>Combo slot</InputLabel>
// 				<Select
// 					className='w-full'
// 					id='combo-slot'
// 					// label='Category'
// 					variant='standard'
// 					// value={}
// 					// onChange={(event: SelectChangeEvent) => {
// 					// 	setSelectedCategory(event.target.value as string)
// 					// }}
// 				>
// 					<MenuItem value='true'>Yes</MenuItem>
// 					<MenuItem value='false'>No</MenuItem>
// 				</Select>
// 			</div>
// 			<TextField
// 				type='number'
// 				variant='standard'
// 				label='Cd card max size (gb)'
// 			/>
// 			<h1 className='text-2xl'>Front Camera</h1>
// 			<TextField
// 				type='number'
// 				variant='standard'
// 				label='Front camera quality (mp)'
// 			/>
// 			<TextField variant='standard' label='Front camera features' />
// 			<TextField variant='standard' label='Front camera placement' />
// 			<TextField
// 				type='text'
// 				variant='standard'
// 				label='Front camera recording specs'
// 			/>
// 			<TextField
// 				type='text'
// 				variant='standard'
// 				label='Front camera additional features'
// 			/>

// 			<h1 className='text-2xl'>Main Camera</h1>
// 			<TextField
// 				type='number'
// 				variant='standard'
// 				label='Main camera quality (mp)'
// 			/>
// 			<TextField variant='standard' label='Main camera features' />
// 			<TextField variant='standard' label='Main camera placement' />
// 			<TextField
// 				type='text'
// 				variant='standard'
// 				label='Main camera recording features'
// 			/>
// 			<TextField
// 				type='text'
// 				variant='standard'
// 				label='Main camera additional features'
// 			/>
// 			<br />
// 			<hr />
// 			<TextField variant='standard' label='Color' />
// 			<TextField variant='standard' label='Wireless technologies' />
// 			<TextField variant='standard' label='Delivery set' />
// 		</div>
// 	)
// }

import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { ProductSpecs, SmartphoneSpecs } from '../../productData.type'

interface SmartphoneSpecsProps {
	specs: SmartphoneSpecs | null
	setSpecs: React.Dispatch<React.SetStateAction<ProductSpecs | null>>
}

export default function SmartphoneSpecsComp(props: SmartphoneSpecsProps) {
	const { specs, setSpecs } = props

	// const defaultSmartphoneSpecs: SmartphoneSpecs = {
	// 	screen_size: 0,
	// 	matrix_type: '',
	// 	screen_refresh_rate_gz: 0,
	// 	number_of_sim_cards: 0,
	// 	sim_cards_format: '',
	// 	ram_gb: 0,
	// 	storage_size: 0,
	// 	cd_card_support: false,
	// 	cd_card_format: '',
	// 	cd_card_max_size: '',
	// 	combo_slot: false,
	// 	front_camera_quality_mp: 0,
	// 	front_camera_features: '',
	// 	front_camera_placement: '',
	// 	front_camera_recording_specs: [],
	// 	front_camera_additional_features: [],
	// 	main_camera_quality_mp: 0,
	// 	main_camera_features: '',
	// 	main_camera_placement: '',
	// 	main_camera_recording_specs: [],
	// 	main_camera_additional_features: [],
	// 	cpu: '',
	// 	core_type: '',
	// 	number_of_cpu_cores: 0,
	// 	core_series: '',
	// 	core_frequency_ghz: 0,
	// 	battery_capacity_mah: 0,
	// 	dust_moisure_protection: '',
	// 	delivery_set: [],
	// 	wireless_technologies: [],
	// 	color: '',
	// }

	// useEffect(() => {
	// 	if (!specs) {
	// 		setSpecs(defaultSmartphoneSpecs)
	// 	}
	// }, [specs, setSpecs])

	const handleChange = <K extends keyof SmartphoneSpecs>(
		key: K,
		value: SmartphoneSpecs[K]
	) => {
		setSpecs(prev => ({ ...(prev as SmartphoneSpecs), [key]: value }))
	}

	return (
		<div className='flex flex-col gap-4 box-border'>
			<h2 className='text-xl '>Display</h2>
			<TextField
				variant='standard'
				type='number'
				label='Screen Size (inches)'
				value={specs?.screen_size || ''}
				onChange={e => handleChange('screen_size', Number(e.target.value))}
			/>
			<TextField
				variant='standard'
				label='Matrix Type'
				value={specs?.matrix_type || ''}
				onChange={e => handleChange('matrix_type', e.target.value)}
			/>
			<TextField
				variant='standard'
				type='number'
				label='Refresh Rate (GHz)'
				value={specs?.screen_refresh_rate_gz || ''}
				onChange={e =>
					handleChange('screen_refresh_rate_gz', Number(e.target.value))
				}
			/>

			<h2 className='text-xl '>SIM & Memory</h2>
			<TextField
				variant='standard'
				type='number'
				label='SIM Cards'
				value={specs?.number_of_sim_cards || ''}
				onChange={e =>
					handleChange('number_of_sim_cards', Number(e.target.value))
				}
			/>
			<TextField
				variant='standard'
				label='SIM Format'
				value={specs?.sim_cards_format || ''}
				onChange={e => handleChange('sim_cards_format', e.target.value)}
			/>
			<TextField
				variant='standard'
				type='number'
				label='RAM (GB)'
				value={specs?.ram_gb || ''}
				onChange={e => handleChange('ram_gb', Number(e.target.value))}
			/>
			<TextField
				variant='standard'
				type='number'
				label='Storage Size (GB)'
				value={specs?.storage_size || ''}
				onChange={e => handleChange('storage_size', Number(e.target.value))}
			/>

			<FormControlLabel
				className='self-start'
				label='Smart TV support'
				labelPlacement='start'
				control={
					<Checkbox
						id='smart-tv-support'
						className='w-12'
						value={specs?.cd_card_support || false}
						// checked={specs?.smart_tv_support}
						onChange={e => {
							handleChange('cd_card_support', e.target.checked)
							console.log(e.target.checked)
						}}
					/>
				}
			/>
			<TextField
				variant='standard'
				label='SD Card Format'
				value={specs?.cd_card_format}
				onChange={e => handleChange('cd_card_format', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='SD Card Max Size'
				value={specs?.cd_card_max_size}
				onChange={e => handleChange('cd_card_max_size', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Combo Slot (true/false)'
				value={String(specs?.combo_slot)}
				onChange={e => handleChange('combo_slot', e.target.value === 'true')}
			/>

			<h2 className='text-xl '>Front Camera</h2>
			<TextField
				variant='standard'
				type='number'
				label='Quality (MP)'
				value={specs?.front_camera_quality_mp}
				onChange={e =>
					handleChange('front_camera_quality_mp', Number(e.target.value))
				}
			/>
			<TextField
				variant='standard'
				label='Features'
				value={specs?.front_camera_features}
				onChange={e => handleChange('front_camera_features', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Placement'
				value={specs?.front_camera_placement}
				onChange={e => handleChange('front_camera_placement', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Recording Specs (comma separated)'
				value={specs?.front_camera_recording_specs?.join(', ')}
				onChange={e =>
					handleChange(
						'front_camera_recording_specs',
						e.target.value.split(', ').map(s => s.trim())
					)
				}
			/>
			<TextField
				variant='standard'
				label='Additional Features (comma separated)'
				value={specs?.front_camera_additional_features.join(',') || ''}
				onChange={e =>
					handleChange(
						'front_camera_additional_features',
						e.target.value.split(', ').map(s => s.trim())
					)
				}
			/>

			<h2 className='text-xl '>Main Camera</h2>
			<TextField
				variant='standard'
				type='number'
				label='Quality (MP)'
				value={specs?.main_camera_quality_mp}
				onChange={e =>
					handleChange('main_camera_quality_mp', Number(e.target.value))
				}
			/>
			<TextField
				variant='standard'
				label='Features'
				value={specs?.main_camera_features}
				onChange={e => handleChange('main_camera_features', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Placement'
				value={specs?.main_camera_placement}
				onChange={e => handleChange('main_camera_placement', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Recording Specs (comma separated)'
				value={specs?.main_camera_recording_specs?.join(', ')}
				onChange={e =>
					handleChange(
						'main_camera_recording_specs',
						e.target.value.split(', ').map(s => s.trim())
					)
				}
			/>
			<TextField
				variant='standard'
				label='Additional Features (comma separated)'
				value={specs?.main_camera_additional_features.join(', ')}
				onChange={e =>
					handleChange(
						'main_camera_additional_features',
						e.target.value.split(', ').map(s => s.trim())
					)
				}
			/>

			<h2 className='text-xl '>CPU & Battery</h2>
			<TextField
				variant='standard'
				label='CPU'
				value={specs?.cpu}
				onChange={e => handleChange('cpu', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Core Type'
				value={specs?.core_type}
				onChange={e => handleChange('core_type', e.target.value)}
			/>
			<TextField
				variant='standard'
				type='number'
				label='CPU Cores'
				value={specs?.number_of_cpu_cores}
				onChange={e =>
					handleChange('number_of_cpu_cores', Number(e.target.value))
				}
			/>
			<TextField
				variant='standard'
				label='Core Series'
				value={specs?.core_series}
				onChange={e => handleChange('core_series', e.target.value)}
			/>
			<TextField
				variant='standard'
				type='number'
				label='Core Frequency (GHz)'
				value={specs?.core_frequency_ghz}
				onChange={e =>
					handleChange('core_frequency_ghz', Number(e.target.value))
				}
			/>
			<TextField
				variant='standard'
				type='number'
				label='Battery Capacity (mAh)'
				value={specs?.battery_capacity_mah}
				onChange={e =>
					handleChange('battery_capacity_mah', Number(e.target.value))
				}
			/>

			<h2 className='text-xl '>Other</h2>
			<TextField
				variant='standard'
				label='Dust & Moisture Protection'
				value={specs?.dust_moisure_protection}
				onChange={e => handleChange('dust_moisure_protection', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Delivery Set (comma separated)'
				value={specs?.delivery_set.join(', ')}
				onChange={e =>
					handleChange(
						'delivery_set',
						e.target.value.split(', ').map(s => s.trim())
					)
				}
			/>
			<TextField
				variant='standard'
				label='Wireless Technologies (comma separated)'
				value={specs?.wireless_technologies.join(', ')}
				onChange={e =>
					handleChange(
						'wireless_technologies',
						e.target.value.split(', ').map(s => s.trim())
					)
				}
			/>
			<TextField
				variant='standard'
				label='Color'
				value={specs?.color}
				onChange={e => handleChange('color', e.target.value)}
			/>
		</div>
	)
}
