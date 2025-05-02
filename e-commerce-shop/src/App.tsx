import './App.css'

// import { useState } from 'react'
import NavBar from './Components/NavBar'

interface ProductDataType {
	name: string
	price: number
	imgUrl: string
	quantity: number
}

function App() {
	// const [data, setData] = useState<ProductDataType | null>(null)

	const ProductData = {
		name: '33i22',
		price: 11.2,
		imgUrl: 'https/sss.com',
		quantity: 19,
	}

	async function fetchData() {
		const resp = await fetch('http://127.0.0.1:8000/products/')
		const newData: ProductDataType[] = await resp.json()
		console.log(newData)
	}

	async function createProduct() {
		const resp = await fetch('http://127.0.0.1:8000/products/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(ProductData),
		})

		const data = await resp.json()
		console.log(data)
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: 10,
				justifyItems: 'center',
				alignItems: 'center',
			}}
		>
			<NavBar />
			<h1>App page</h1>
			<button onClick={fetchData}>Press</button>
			<button onClick={createProduct}>Create</button>
		</div>
	)
}

export default App
