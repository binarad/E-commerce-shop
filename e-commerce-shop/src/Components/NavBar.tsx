import { Link } from 'react-router'
import { ShoppingCart } from '@mui/icons-material'
import MainFavicon from '/favicon.png'
export default function NavBar() {
	const cart = localStorage.getItem('cart')
	const productQuantity = JSON.parse(cart!).length

	return (
		<div className='flex h-[65px] w-full flex-row justify-center items-center px-[32px] border-b border-[#D9D9D9] bg-[#fff] gap-6 box-border flex-none order-none self-stretch flex-grow-1'>
			<Link
				to={'/'}
				className='w-[40px] h-[40px] flex flex-row items-center flex-none order-none grow-0 mr-auto'
			>
				<img src={MainFavicon} alt='main-logo' className='h-[40px] w-[40px]' />
			</Link>

			<input
				type='text'
				placeholder='Enter the product name'
				className='w-[350px] h-[40px] border border-[#d9d9d9] rounded-2xl p-3 text-center' // TODO add search suggestions for name, tech-specs
			/>

			<Link
				to={'/cartpage'}
				className='ml-auto w-[40px] h-[40px] relative flex justify-center items-center'
			>
				<ShoppingCart className='w-8 z-0' />
				<span className='absolute top-[-10px] right-[-10px] bg-slate-600 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm '>
					{productQuantity}
				</span>
			</Link>
		</div>
	)
}
