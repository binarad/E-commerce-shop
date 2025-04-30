// NOT RESPONSIVE PANEL
import { useState } from 'react'
import './admin.css'
export default function Admin() {
	const [data, setData] = useState()
	return (
		<div id='admin-main'>
			<div id='admin-panel'>
				<p>Admin Panel</p>
			</div>
		</div>
	)
}
