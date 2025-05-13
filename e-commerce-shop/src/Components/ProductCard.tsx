import React from 'react'
import CartType from '../Pages/Cart/cartData.type'
const ProductCard: React.FC<CartType> = ({ name, price, imgUrl, quantity }) => {
	return (
		<div className='h-[400px] w-[300px] items-center justify-center flex flex-col m-[10px] p-[2.5px] border border-[#d9d9d9] rounded-lg'>
			<img
				src={imgUrl}
				alt={`${name}-img`}
				className='h-[250px] w-[250px] aspect-square'
			/>

			<div className='m-2 flex flex-col w-[220px] justify-center'>
				<p>{name}</p>
				<p>${price}</p>
				<p>In stock: {quantity}</p>
			</div>
		</div>
	)
}

export default ProductCard
