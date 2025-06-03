import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ProductPublic } from '../productData.type'
import { Link } from 'react-router'
import { Button } from '@mui/material'
function ProductDetails() {
	const params = useParams()
	const [data, setData] = useState<ProductPublic[]>([])

	useEffect(() => {
		// check does product with this name exist in db
		const getList = async () => {
			const req = await fetch('http://127.0.0.1:8000/products/')
			const resp = await req.json()
			setData(resp)
		}

		getList()
	}, [])

	const product = data.find(product => product.name === params.productID)

	if (!product)
		return (
			<div className='flex flex-col h-1/2 gap-6 items-center justify-center text-3xl font-semibold'>
				<h1> Product not found </h1>
				<Link to='/'>
					<Button variant='contained' className='w-[150px] h-[40px]'>
						Go back
					</Button>
				</Link>
			</div>
		)
	return (
		<div className='flex flex-col gap-6  justify-center h-full  p-10 '>
			<h1 className='text-xl'>{product.name}</h1>
			<h1 className='text-md'>Manufacturer: {product.manufacturer}</h1>
			<h1 className='text-md capitalize'> Category: {product.type}</h1>
			<h1 className='text-md'>Warranty months: {product.warranty_months}</h1>
			<div className='flex flex-col'>
				<h1 className='text-xl'>Technical specifications</h1>
				<div className='overflow-auto flex flex-col h-[500px] flex-wrap'>
					{product?.specs &&
						Object.entries(product.specs).map(([specName, values]) => (
							<div key={specName} className='my-4 flex gap-2'>
								<h2>{specName.replace(/_/g, ' ')}:</h2>
								{Array.isArray(values) ? (
									values.map((value, index) => (
										<div key={index} className='flex items-center gap-2'>
											<label>{value}</label>
										</div>
									))
								) : (
									<div className='flex items-center gap-2'>
										<label>{values}</label>
									</div>
								)}
							</div>
						))}
				</div>
				<div id='footer' className='flex gap-5'>
					<p>Price {product.price}$</p>
					<p>In stock: {product.quantity}</p>
					<Link to={'/'}>
						<Button variant='contained'>Go back</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
