// TODO: End home page
import { useEffect, useMemo, useState } from 'react'
import { ProductPublic } from '../productData.type'
import ProductCard from '../Components/ProductCard'
import { CartItem } from '../App'
import { Box, Slider } from '@mui/material'

interface HomePageProps {
	cartData: CartItem[]
	setCartData: React.Dispatch<React.SetStateAction<CartItem[]>>
}
export default function HomePage({ cartData, setCartData }: HomePageProps) {
	const [productsList, setProductsList] = useState<ProductPublic[]>([])
	const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>(
		[]
	)

	const [selectedCategories, setSelectedCategories] = useState<string[]>([])

	const handleSelectManufacturers = (manufacturer: string) => {
		setSelectedManufacturers(prev =>
			prev.includes(manufacturer)
				? prev.filter(m => m !== manufacturer)
				: [...prev, manufacturer]
		)
		console.log(selectedManufacturers)
	}
	const handleSelectCategory = (category: string) => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(m => m !== category)
				: [...prev, category]
		)
		console.log(selectedCategories)
	}

	const minPrice = useMemo(() => {
		if (productsList.length === 0) return 0
		return Math.min(...productsList.map(p => p.price))
	}, [productsList])

	const maxPrice = useMemo(() => {
		if (productsList.length === 0) return 0
		return Math.max(...productsList.map(p => p.price))
	}, [productsList])

	const [priceVal, setPriceVal] = useState<number[]>([minPrice, 700])

	useEffect(() => {
		const getProductsList = async () => {
			const req = await fetch('http://127.0.0.1:8000/products/')
			const resp = await req.json()
			setProductsList(resp)
		}
		getProductsList()
	}, [])

	const marks = [
		{
			value: minPrice,
			label: `${minPrice}`,
		},
		{
			value: maxPrice,
			label: `${maxPrice}`,
		},
	]

	const handleChange = (e: Event, newValue: number[]) => {
		setPriceVal(newValue)
	}

	return (
		<div className='flex flex-row h-full w-full p-3'>
			<div id='products-list' className='flex  w-5/5 m-5 flex-wrap flex-1'>
				{productsList
					.filter(
						product =>
							product.price >= priceVal[0] && product.price <= priceVal[1]
					)
					.filter(product =>
						selectedManufacturers
							? selectedManufacturers.includes(product.manufacturer)
							: product.manufacturer
					)
					.map(product => (
						<ProductCard
							key={product.id}
							name={product.name}
							price={product.price}
							quantity={product.quantity}
							cartData={cartData}
							setCartData={setCartData}
						/>
					))}
			</div>
			<aside className='flex flex-col w-[380px] h-full ml-auto border-l border-[#d9d9d9] p-5 mr-2'>
				<h1>Brand</h1>
				{productsList.map(product => (
					<div className='flex gap-2' key={product.manufacturer}>
						<input
							type='checkbox'
							checked={selectedManufacturers.includes(product.manufacturer)}
							onChange={() => handleSelectManufacturers(product.manufacturer)}
						/>
						<h1>
							{product.manufacturer.charAt(0).toUpperCase() +
								product.manufacturer.slice(1)}
						</h1>
					</div>
				))}

				<h1>Category</h1>
				{productsList.map(product => (
					<div className='flex gap-2' key={product.type}>
						<input
							type='checkbox'
							checked={selectedCategories.includes(product.type)}
							onChange={() => handleSelectCategory(product.type)}
						/>
						<h1>
							{product.type.charAt(0).toUpperCase() + product.type.slice(1)}
						</h1>
					</div>
				))}
				<h1>Price</h1>
				<Box>
					<Slider
						min={minPrice}
						max={maxPrice}
						valueLabelDisplay='auto'
						marks={marks}
						value={priceVal}
						onChange={handleChange}
					/>
				</Box>
			</aside>
		</div>
	)
}
