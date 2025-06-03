import { Link } from 'react-router'
import './admin.css'
import { Button, Checkbox } from '@mui/material'
import { useState, useEffect } from 'react'
import { ProductPublic } from '../../productData.type'
export default function Admin() {
	const [productList, setProductList] = useState<ProductPublic[]>([])
	const [selectedIds, setSelectedIds] = useState<number[]>([])
	const [reloadTrigger, setReloadTrigger] = useState<number>(0)
	const toggleSelected = (id: number) => {
		setSelectedIds(prev =>
			prev.includes(id) ? prev.filter(ids => ids !== id) : [...prev, id]
		)
	}

	const reloadProducts = () => {
		setReloadTrigger(prev => prev + 1)
	}
	const deleteSelected = async () => {
		for (let id = 0; id < selectedIds.length; id++) {
			const req = await fetch(
				`http://127.0.0.1:8000/products/${selectedIds[id]}`,
				{
					method: 'DELETE',
				}
			)

			if (req.ok) {
				const res = await req.json()
				reloadProducts()
				console.log(res)
			}
		}
	}
	useEffect(() => {
		const fetchData = async () => {
			const req = await fetch('http://127.0.0.1:8000/products/')
			if (req.ok) {
				const res = await req.json()
				console.log(res)
				setProductList(res)
			}
		}

		fetchData()
	}, [reloadTrigger])

	return (
		<div id='admin-container'>
			<div id='admin-panel'>
				<h1 id=''>Admin Panel</h1>
				<div id='created-products-list'>
					{productList &&
						productList.map(product => (
							<div className='created-product' key={product.id}>
								<p id='product-name'>{product.name}</p>
								<b id='product-price'>{product.price}$</b>
								<p id='product-quantity'>x{product.quantity}</p>
								<span id='checkbox'>
									<Checkbox
										size='small'
										checked={selectedIds.includes(product.id)}
										onChange={() => {
											toggleSelected(product.id)
										}}
									/>
								</span>
							</div>
						))}
				</div>
				<div id='buttons'>
					<Link to={'/'}>
						<Button variant='outlined'>Home Page</Button>
					</Link>
					<Link to={'/admin/create-product'}>
						<button className='bg-sky-600 text-white hover:bg-sky-700'>
							Create Product
						</button>
					</Link>

					<Button
						className='bg-red-700 text-white hover:bg-red-800 '
						onClick={deleteSelected}
						color='error'
						variant='outlined'
						disabled={selectedIds.length === 0}
					>
						Delete Product
					</Button>
				</div>
			</div>
		</div>
	)
}
