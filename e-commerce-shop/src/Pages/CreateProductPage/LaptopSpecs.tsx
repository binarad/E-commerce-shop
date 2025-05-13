import { TextField } from '@mui/material'
import React from 'react'

export default function LaptopSpecs() {
	return (
		<div className='box-border flex flex-col'>
			<h1 className='text-2xl'>Screen</h1>
			<TextField type='number' variant='standard' label='Screen size (inch)' />
			<TextField
				type='number'
				variant='standard'
				label='Screen refresh rate (ghz)'
			/>
			<TextField type='number' variant='standard' label='Screen resolution' />
			<TextField variant='standard' label='Matrix type' />
			<h1 className='text-2xl'>CPU</h1>
			<TextField variant='standard' label='CPU' />
			<TextField variant='standard' label='CPU generation' />
			<TextField type='number' variant='standard' label='CPU frequency (ghz)' />
			<h1 className='text-2xl'>GPU</h1>
			<TextField variant='standard' label='GPU' />
			<TextField type='number' variant='standard' label='GPU Ram size (gb)' />
			<TextField variant='standard' label='GPU type' />
			<h1 className='text-2xl'>RAM</h1>
			<TextField type='number' variant='standard' label='RAM size (gb)' />
			<TextField variant='standard' label='RAM type' />
			<TextField type='number' variant='standard' label='RAM frequency (ghz)' />
			<h1 className='text-2xl'>Storage</h1>
			<TextField type='number' variant='standard' label='Storage size (gb)' />
			<TextField variant='standard' label='Storage type' />
			<br />
			<hr />
			<TextField variant='standard' label='Color' />
			<TextField type='number' variant='standard' label='Weight (kg)' />
			<TextField variant='standard' label='Size LxWxH' />
			<TextField variant='standard' label='Network adapters' />
			<TextField variant='standard' label='USB ports' />
			<TextField variant='standard' label='Video ports' />
			<TextField variant='standard' label='Audio ports' />
			<TextField variant='standard' label='Wireless connections' />
			<TextField variant='standard' label='Delivery set' />
			<TextField variant='standard' label='Operating system' />
		</div>
	)
}
