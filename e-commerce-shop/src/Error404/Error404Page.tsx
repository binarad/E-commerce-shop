import React from 'react'
import { Link } from 'react-router'
import Error404Img from '../assets/page404.svg'
import './style.css'
import { Button } from '@mui/material'
export default function Error404Page() {
	return (
		<div id='container'>
			<img src={Error404Img} />
			<Link to={'/'} id='home-link'>
				<Button variant='contained' sx={{ width: '200px', height: '50px' }}>
					Go to the main page
				</Button>
			</Link>
		</div>
	)
}
