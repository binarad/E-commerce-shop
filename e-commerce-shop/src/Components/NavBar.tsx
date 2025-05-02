import { Link } from 'react-router'
import Favicon from '/favicon.png'
export default function NavBar() {
	return (
		<div
			style={{
				width: '100%',
				height: '60px',
				backgroundColor: 'gray',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div>
				<span>
					<Link to={'/'}>
						<img
							src={Favicon}
							style={{ width: '30px', height: '30px', margin: '0 20px  ' }}
						/>
					</Link>
				</span>
			</div>
			{/* <p>This is Navigation Tab component</p> */}
			<input type='text' />
		</div>
	)
}
