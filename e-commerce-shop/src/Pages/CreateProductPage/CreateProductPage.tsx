import { useEffect, useState } from 'react'
import './create_product.css'
import TechSpecs from './TechSpecs'
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from '@mui/material'

interface Categories {
	smartphone: string
	laptop: string
	tablet: string
	tv: string
}

export default function CreateProductPage() {
	const [selectedCategory, setSelectedCategory] = useState<string>('')

	const [categories, setCategories] = useState<Categories | null>(null)

	const getProductsList = async () => {
		const req = await fetch('http://127.0.0.1:8000/products/')
		const resp = await req.json()
		console.log(resp)
	}
	useEffect(() => {
		const fetchCategories = async () => {
			const resp = await fetch('http://127.0.0.1:8000/categories/')
			const getCategories = await resp.json()
			setCategories(getCategories)
		}
		fetchCategories()
	}, [])
	return (
		<div id='create-product-main'>
			<h1 id='title'>Create Product</h1>
			{/* Do i need img? */}
			<div id='create-product-container' className='gap-2.5'>
				{/* <img id='product-image' alt='product image' />
				<Button variant='contained' className='w-[250px]'>
					<label htmlFor='product-image-input'>Click to upload photo</label>
				</Button>
				<input type='file' id='product-image-input' className='hidden' /> */}

				<TextField label='Enter the product name' variant='standard' />
				<FormControl>
					<InputLabel id='category-select'>Category</InputLabel>
					<Select
						id='category-select'
						label='Category'
						variant='standard'
						value={selectedCategory}
						onChange={(event: SelectChangeEvent) => {
							setSelectedCategory(event.target.value as string)
						}}
					>
						<MenuItem value='smartphone'>Smartphone</MenuItem>
						<MenuItem value='laptop'>Laptop</MenuItem>
						<MenuItem value='tablet'>Tablet</MenuItem>
						<MenuItem value='tv'>TV</MenuItem>
					</Select>
				</FormControl>
				<TextField variant='standard' type='text' label='Manufacturer' />
				<TextField variant='standard' type='number' label='Price $' />
				<TextField variant='standard' type='number' label='Quantity' />
				<TextField variant='standard' type='number' label='Warranty period' />
				<p>Technical specifications</p>
				<hr />
				<TechSpecs selectedCategory={selectedCategory} />
				<Button
					variant='contained'
					onClick={getProductsList}
					className='w-[250px]'
				>
					Create Product
				</Button>
			</div>
		</div>
	)
}
