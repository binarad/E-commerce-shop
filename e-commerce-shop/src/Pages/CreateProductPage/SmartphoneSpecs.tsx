import React from 'react'
import {
	Checkbox,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material'
export default function SmartphoneSpecs() {
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
			<TextField type='number' variant='standard' label='Number of sim cards' />
			<TextField variant='standard' label='Sim cards format' />
			<h1 className='text-2xl'>CPU</h1>
			<TextField variant='standard' label='CPU' />
			<TextField variant='standard' label='CPU core type' />
			<TextField variant='standard' label='CPU series' />
			<TextField type='number' variant='standard' label='CPU frequency (ghz)' />
			<TextField type='number' variant='standard' label='Number of cpu cores' />
			<h1 className='text-2xl'>RAM</h1>
			<TextField type='number' variant='standard' label='RAM size (gb)' />
			<TextField variant='standard' label='RAM type' />
			<TextField type='number' variant='standard' label='RAM frequency (ghz)' />
			<h1 className='text-2xl'>Storage</h1>
			<TextField type='number' variant='standard' label='Storage size (gb)' />
			<TextField type='checkbox' variant='standard' label='Cd card support' />
			<TextField variant='standard' label='Cd card format' />
			{/* <TextField type='checkbox' variant='standard' label='Combo slot' /> */}
			<div className='my-5 gap-2 w-[300px] '>
				<InputLabel id='combo-slot'>Combo slot</InputLabel>
				<Select
					className='w-full'
					id='combo-slot'
					// label='Category'
					variant='standard'
					// value={}
					// onChange={(event: SelectChangeEvent) => {
					// 	setSelectedCategory(event.target.value as string)
					// }}
				>
					<MenuItem value='true'>Yes</MenuItem>
					<MenuItem value='false'>No</MenuItem>
				</Select>
			</div>
			<TextField
				type='number'
				variant='standard'
				label='Cd card max size (gb)'
			/>
			<h1 className='text-2xl'>Front Camera</h1>
			<TextField
				type='number'
				variant='standard'
				label='Front camera quality (mp)'
			/>
			<TextField variant='standard' label='Front camera features' />
			<TextField variant='standard' label='Front camera placement' />
			<TextField
				type='text'
				variant='standard'
				label='Front camera recording specs'
			/>
			<TextField
				type='text'
				variant='standard'
				label='Front camera additional features'
			/>

			<h1 className='text-2xl'>Main Camera</h1>
			<TextField
				type='number'
				variant='standard'
				label='Main camera quality (mp)'
			/>
			<TextField variant='standard' label='Main camera features' />
			<TextField variant='standard' label='Main camera placement' />
			<TextField
				type='text'
				variant='standard'
				label='Main camera recording features'
			/>
			<TextField
				type='text'
				variant='standard'
				label='Main camera additional features'
			/>
			<br />
			<hr />
			<TextField variant='standard' label='Color' />
			<TextField variant='standard' label='Wireless technologies' />
			<TextField variant='standard' label='Delivery set' />
		</div>
	)
}
