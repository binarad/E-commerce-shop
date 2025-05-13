// NOT RESPONSIVE PANEL
import { Link } from 'react-router'
import './admin.css'
import { Checkbox } from '@mui/material'
export default function Admin() {
	return (
		<div id='admin-container'>
			<div id='admin-panel'>
				<h1 id=''>Admin Panel</h1>
				<div id='created-products-list'>
					Here will be list of created products
					<div className='created-product'>
						<p id='product-name'>prod name</p>
						<b id='product-price'>$1999.99</b>
						<p id='product-quantity'>x199</p>
						<span id='checkbox'>
							<Checkbox size='small' />
						</span>
					</div>
				</div>
				<div id='buttons'>
					<Link to={'/admin/create-product'}>
						<button className='bg-sky-600 text-white hover:bg-sky-700'>
							Create Product
						</button>
					</Link>
					{/* TODO: create function to delete selected product from localStorage */}
					<button className='bg-red-700 text-white hover:bg-red-800 '>
						Delete Product
					</button>
				</div>
			</div>
		</div>
	)
}
