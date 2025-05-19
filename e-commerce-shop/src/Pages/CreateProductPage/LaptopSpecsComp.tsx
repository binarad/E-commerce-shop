import { TextField } from '@mui/material'
import { LaptopSpecs, ProductSpecs } from '../../productData.type'
import { useEffect } from 'react'

interface LaptopSpecsProps {
	specs: LaptopSpecs | null
	setSpecs: React.Dispatch<React.SetStateAction<ProductSpecs | null>>
}

export default function LaptopSpecsComp(props: LaptopSpecsProps) {
	const { specs, setSpecs } = props

	const handleChange = <K extends keyof LaptopSpecs>(
		key: K,
		value: LaptopSpecs[K]
	) => {
		setSpecs(prev => ({ ...(prev as LaptopSpecs), [key]: value }))
	}
	useEffect(() => {
		if (!specs) {
			setSpecs({
				screen_size: 0,
				screen_refresh_rate_gz: 0,
				screen_resolution: '',
				matrix_type: '',
				cpu: '',
				cpu_generation: '',
				cpu_frequency_ghz: 0,
				gpu: '',
				gpu_storage_size_gb: 0,
				gpu_type: '',
				ram_gb: 0,
				ram_type: '',
				ram_frequency_ghz: 0,
				storage: 0,
				storage_type: '',
				color: '',
				weight_kg: 0,
				size: '',
				network_adapters: [],
				usb_ports: [],
				video_ports: [],
				audio_ports: [],
				wireless_connections: [],
				delivery_set: [],
				os: '',
			})
		}
	}, [specs, setSpecs])
	return (
		<div className='box-border flex flex-col'>
			<h1 className='text-2xl'>Screen</h1>
			<TextField
				type='number'
				variant='standard'
				label='Screen size (inch)'
				value={specs?.screen_size || ''}
				onChange={e => {
					handleChange('screen_size', parseFloat(e.target.value))
				}}
			/>
			<TextField
				type='number'
				variant='standard'
				label='Screen refresh rate (ghz)'
				value={specs?.screen_refresh_rate_gz || ''}
				onChange={e => {
					handleChange('screen_refresh_rate_gz', parseFloat(e.target.value))
				}}
			/>
			<TextField
				variant='standard'
				label='Screen resolution'
				value={specs?.screen_resolution || ''}
				onChange={e => {
					handleChange('screen_resolution', e.target.value)
				}}
			/>
			<TextField
				variant='standard'
				label='Matrix type'
				value={specs?.matrix_type || ''}
				onChange={e => {
					handleChange('matrix_type', e.target.value)
				}}
			/>
			<h1 className='text-2xl'>CPU</h1>
			<TextField
				variant='standard'
				label='CPU'
				value={specs?.cpu || ''}
				onChange={e => {
					handleChange('cpu', e.target.value)
				}}
			/>
			<TextField
				variant='standard'
				label='CPU generation'
				value={specs?.cpu_generation || ''}
				onChange={e => {
					handleChange('cpu_generation', e.target.value)
				}}
			/>
			<TextField
				type='number'
				variant='standard'
				label='CPU frequency (ghz)'
				value={specs?.cpu_frequency_ghz || ''}
				onChange={e => {
					handleChange('cpu_frequency_ghz', parseFloat(e.target.value))
				}}
			/>
			<h1 className='text-2xl'>GPU</h1>
			<TextField
				variant='standard'
				label='GPU'
				value={specs?.gpu || ''}
				onChange={e => {
					handleChange('gpu', e.target.value)
				}}
			/>
			<TextField
				type='number'
				variant='standard'
				label='GPU Ram size (gb)'
				value={specs?.gpu_storage_size_gb || ''}
				onChange={e => {
					handleChange('gpu_storage_size_gb', parseFloat(e.target.value))
				}}
			/>
			<TextField
				variant='standard'
				label='GPU type'
				value={specs?.gpu_type || ''}
				onChange={e => {
					handleChange('gpu_type', e.target.value)
				}}
			/>
			<h1 className='text-2xl'>RAM</h1>
			<TextField
				type='number'
				variant='standard'
				label='RAM size (gb)'
				value={specs?.ram_gb || ''}
				onChange={e => {
					handleChange('ram_gb', parseFloat(e.target.value))
				}}
			/>
			<TextField
				variant='standard'
				label='RAM type'
				value={specs?.ram_type || ''}
				onChange={e => {
					handleChange('ram_type', e.target.value)
				}}
			/>
			<TextField
				type='number'
				variant='standard'
				label='RAM frequency (ghz)'
				value={specs?.ram_frequency_ghz || ''}
				onChange={e => {
					handleChange('ram_frequency_ghz', parseFloat(e.target.value))
				}}
			/>
			<h1 className='text-2xl'>Storage</h1>
			<TextField
				type='number'
				variant='standard'
				label='Storage size (gb)'
				value={specs?.storage || ''}
				onChange={e => {
					handleChange('storage', parseFloat(e.target.value))
				}}
			/>
			<TextField
				variant='standard'
				label='Storage type'
				value={specs?.storage_type || ''}
				onChange={e => {
					handleChange('storage_type', e.target.value)
				}}
			/>
			<br />
			<hr />
			<TextField
				variant='standard'
				label='Color'
				value={specs?.color || ''}
				onChange={e => {
					handleChange('color', e.target.value)
				}}
			/>
			<TextField
				type='number'
				variant='standard'
				label='Weight (kg)'
				value={specs?.weight_kg || ''}
				onChange={e => {
					handleChange('weight_kg', parseFloat(e.target.value))
				}}
			/>
			<TextField
				variant='standard'
				label='Size LxWxH'
				value={specs?.size || ''}
				onChange={e => {
					handleChange('size', e.target.value)
				}}
			/>
			<TextField
				variant='standard'
				label='Network adapters'
				value={specs?.network_adapters.join(', ') || ''}
				onChange={e => {
					handleChange(
						'network_adapters',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='USB ports'
				value={specs?.usb_ports.join(', ') || ''}
				onChange={e => {
					handleChange(
						'usb_ports',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='Video ports'
				value={specs?.video_ports.join(', ') || ''}
				onChange={e => {
					handleChange(
						'video_ports',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='Audio ports'
				value={specs?.audio_ports.join(', ') || ''}
				onChange={e => {
					handleChange(
						'audio_ports',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='Wireless connections'
				value={specs?.wireless_connections.join(', ') || ''}
				onChange={e => {
					handleChange(
						'wireless_connections',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='Delivery set'
				value={specs?.delivery_set.join(', ') || ''}
				onChange={e => {
					handleChange(
						'delivery_set',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='Operating system'
				value={specs?.os || ''}
				onChange={e => {
					handleChange('os', e.target.value)
				}}
			/>
		</div>
	)
}
