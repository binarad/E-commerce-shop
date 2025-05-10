import { useState } from 'react'
import NavBar from '../../Components/NavBar'
import { Link } from 'react-router'
import { ArrowBack } from '@mui/icons-material'

export default function CartPage() {
	const [cart, setCart] = useState<string[]>([])
	const cartJSON = localStorage.getItem('cart')
	const handleCheckSize = () => {
		if (cartJSON) {
			setCart(JSON.parse(cartJSON))
			console.log(cart.length)
		}
	}

	if (cart.length == 0) {
		return (
			<div className='w-full flex flex-col'>
				<NavBar />
				<div className='flex flex-col items-center justify-center m-10'>
					<span className='text-3xl font-bold'>Your cart is empty</span>
					<Link
						to='/'
						className='flex items-center hover:cursor-pointer bg-slate-500 text-white rounded-md p-2 mt-4 w-40 h-10 justify-center hover:bg-slate-600'
					>
						<ArrowBack />
						<span>Back to Home</span>
					</Link>
					<button
						onClick={handleCheckSize}
						className='w-32 h-16 border bg-amber-300 rounded-4xl cursor-pointer'
					>
						size
					</button>
				</div>
			</div>
		)
	}
	// TODO check cart data in localStorage if len 0 return "Your cart is empty"
	return (
		<div className='w-full flex flex-col items-center '>
			<NavBar />

			<div className='flex flex-col p-4 w-[1200px]'>
				{cart.map(product => (
					<div
						key={product}
						className='flex items-center border py-2 px-4 my-2 h-20 rounded-lg border-[#d9d9d9]'
					>
						<div className='flex items-center w-[60px]'>
							<img alt='product_img' />
						</div>

						<div className='m-3'>
							{product} - $199.99{/* product price*/} x19{' '}
							{/* product quantity */}
						</div>
						<button className='text-red-500 hover:underline ml-auto'>
							Remove
						</button>

						{/* TODO: end cart page */}
					</div>
				))}
			</div>
		</div>
	)
}
