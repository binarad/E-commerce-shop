import React from 'react'
import { Button } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import { CartItem } from '../App'

interface CardProps {
	name: string
	price: number
	quantity: number
	cartData: CartItem[]
	setCartData: React.Dispatch<React.SetStateAction<CartItem[]>>
}

const ProductCard: React.FC<CardProps> = props => {
	const addToCartHandle = () => {
		const newProduct = {
			name: props.name,
			price: props.price,
			quantity: 1,
		}

		const existing = props.cartData.find(item => item.name === newProduct.name)
		if (existing) {
			const updatedCart = props.cartData.map(item =>
				item.name == newProduct.name
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
			props.setCartData(updatedCart)
		} else {
			props.setCartData([...props.cartData, newProduct])
		}
	}
	return (
		<div className='h-[100px] w-[300px] items-center   justify-around flex flex-col m-[5px] p-2 border border-[#d9d9d9] rounded-lg'>
			<div className='flex flex-row justify-around items-center w-full '>
				<h1>{props.name}</h1>
				<b>${props.price}</b>
				<Button
					variant='contained'
					onClick={e => {
						e.preventDefault()
						e.stopPropagation()
						addToCartHandle()
					}}
				>
					<AddShoppingCart />
				</Button>
			</div>
			<p className='text-sm '>In stock: {props.quantity}</p>
		</div>
	)
}

export default ProductCard
