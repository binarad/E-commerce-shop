import React from 'react'
import { ProductSpecs, TVSpecs } from '../../productData.type'
import { Checkbox, FormControlLabel, TextField } from '@mui/material'

type TvSpecsProps = {
	specs: TVSpecs | null
	setSpecs: React.Dispatch<React.SetStateAction<ProductSpecs | null>>
}

export default function TVSpecsComp({ specs, setSpecs }: TvSpecsProps) {
	const handleChange = <K extends keyof TVSpecs>(key: K, value: TVSpecs[K]) => {
		setSpecs(prev => ({ ...(prev as TVSpecs), [key]: value }))
	}
	return (
		<div className='flex flex-col gap-3'>
			<TextField
				variant='standard'
				label='Screen Size (inch)'
				onChange={e => {
					handleChange('screen_size', Number(e.target.value))
				}}
			/>
			<FormControlLabel
				className='self-start'
				label='Smart TV support'
				labelPlacement='start'
				control={
					<Checkbox
						id='smart-tv-support'
						className='w-12'
						value={specs?.smart_tv_support || false}
						// checked={specs?.smart_tv_support}
						onChange={e => {
							handleChange('smart_tv_support', e.target.checked)
							console.log(e.target.checked)
						}}
					/>
				}
			/>
			<TextField
				variant='standard'
				label='Smart TV'
				onChange={e => {
					handleChange('smart_tv', e.target.value)
				}}
			/>
			<TextField
				variant='standard'
				label='OS'
				onChange={e => {
					handleChange('os', e.target.value)
				}}
			/>
			<TextField
				variant='standard'
				label='Screen resolution'
				onChange={e => {
					handleChange('screen_resolution', e.target.value)
				}}
			/>
			<TextField
				variant='standard'
				label='Screen refresh rate GHz'
				onChange={e => {
					handleChange('screen_refresh_rate_ghz', Number(e.target.value))
				}}
			/>
			<TextField
				variant='standard'
				label='Ports'
				onChange={e => {
					handleChange(
						'ports',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='Wireless connections'
				onChange={e => {
					handleChange(
						'wireless_connections',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
			<TextField
				variant='standard'
				label='Border color'
				onChange={e => {
					handleChange('border_color', e.target.value)
				}}
			/>
			<TextField
				variant='standard'
				label='Additional specs'
				onChange={e => {
					handleChange(
						'additional_specs',
						e.target.value.split(', ').map(s => s.trim())
					)
				}}
			/>
		</div>
	)
}
