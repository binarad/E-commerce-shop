import React, { useState } from 'react'
import './create_product.css'
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material'

export default function CreateProductPage() {
	const [category, setCategory] = useState<string>('')
	return (
		<div id='create-product-main'>
			<h1>Create Product</h1>
			{/* Do i need img? */}
			<div id='create-product-container' className='gap-2.5'>
				<img id='product-image' alt='product image' />
				<Button variant='contained' className='w-[210px]'>
					<label htmlFor='product-image-input'>Click to upload photo</label>
				</Button>
				<input type='file' id='product-image-input' className='hidden' />

				<TextField label='Enter the product name' variant='standard' />
				<FormControl>
					<InputLabel id='category-select'>Category</InputLabel>
					<Select
						id='category-select'
						label='Category'
						variant='standard'
						onChange={(event: SelectChangeEvent) => {
							setCategory(event.target.value as string)
						}}
					>
						<MenuItem value=''></MenuItem>
						<MenuItem value='biba'>biba</MenuItem>
						<MenuItem value='boba'>boba</MenuItem>
					</Select>
				</FormControl>
				<TextField variant='standard' type='text' label='Manufacturer' />
				<TextField variant='standard' type='number' label='Price $' />
				<TextField variant='standard' type='number' label='Quantity' />
				<TextField variant='standard' type='number' label='Warranty period' />
				<p>Technical specifications</p>
				{category && category == 'boba' ? 'Abibas' : ''}
				<Button variant='contained'>Create Product</Button>
			</div>
		</div>
	)
}
