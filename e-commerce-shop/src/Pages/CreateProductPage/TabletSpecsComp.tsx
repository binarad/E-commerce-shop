import { TextField } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { ProductSpecs, TabletSpecs } from '../../productData.type'

type Props = {
	specs: TabletSpecs | null
	setSpecs: Dispatch<SetStateAction<ProductSpecs | null>>
}

const TabletSpecsComp = ({ specs, setSpecs }: Props) => {
	const handleChange = <K extends keyof TabletSpecs>(
		key: K,
		value: TabletSpecs[K]
	) => {
		setSpecs(prev => ({ ...(prev as TabletSpecs), [key]: value }))
	}

	return (
		<div className='grid grid-cols-2 gap-4'>
			<TextField
				variant='standard'
				label='Screen Size'
				type='number'
				value={specs?.screen_size}
				onChange={e => handleChange('screen_size', +e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Matrix Type'
				value={specs?.matrix_type}
				onChange={e => handleChange('matrix_type', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Screen Refresh Rate (Hz)'
				type='number'
				value={specs?.screen_refresh_rate_gz}
				onChange={e => handleChange('screen_refresh_rate_gz', +e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Storage Size (GB)'
				type='number'
				value={specs?.storage_size}
				onChange={e => handleChange('storage_size', +e.target.value)}
			/>
			<TextField
				variant='standard'
				label='RAM (GB)'
				type='number'
				value={specs?.ram_gb}
				onChange={e => handleChange('ram_gb', +e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Color'
				value={specs?.color}
				onChange={e => handleChange('color', e.target.value)}
			/>
			<TextField
				variant='standard'
				label='Battery Capacity (mAh)'
				type='number'
				value={specs?.battery_capacity_mah}
				onChange={e => handleChange('battery_capacity_mah', +e.target.value)}
			/>
		</div>
	)
}

export default TabletSpecsComp
