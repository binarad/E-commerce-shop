import React from 'react'
import { Link } from 'react-router'
import Error404Img from '/page404.svg'
import './style.css'
export default function Error404Page() {
	return (
		<div id='container'>
			<img src={Error404Img} />
			<Link to={'/'} id='home-link'>
				Go to the main page
			</Link>
		</div>
	)
}
