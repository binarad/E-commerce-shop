import './admin-login.css'
import {
	TextField,
	Button,
	InputAdornment,
	IconButton,
	Box,
} from '@mui/material'
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material'
import React, { useState } from 'react'

export default function AdminLogin() {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [isValid, setIsValid] = useState<boolean>(false)
	//----------------------------------------
	const login1 = 'admin'
	const password1 = '1234'

	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	//----------------------------------------
	const handleClickShowPassowrd = () => {
		setShowPassword(show => !show)
	}
	//----------------------------------------
	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}
	//----------------------------------------
	const handleMouseUpPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}

	const handleCheckInputs = () => {
		if (login1 === login) setIsValid(true)
	}
	//----------------------------------------
	return (
		<div id='login-container'>
			<div id='login-panel'>
				<h1>Admin Login</h1>

				<div id='input-fields'>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<TextField
							sx={{
								m: 1,
								width: '300px',
							}}
							label='Login'
							variant='outlined'
							slotProps={{
								input: {
									endAdornment: (
										<InputAdornment position='end'>
											<AccountCircle />
										</InputAdornment>
									),
								},
							}}
							onChange={e => setLogin(e.target.value)}
						/>

						<TextField
							sx={{
								m: 1,
								width: '300px',
							}}
							label='Password'
							variant='outlined'
							type={showPassword ? 'text' : 'password'}
							onChange={e => setPassword(e.target.value)}
							slotProps={{
								input: {
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												sx={{
													width: '50px',
													height: '24px',
												}}
												aria-label={
													showPassword
														? 'hide the password'
														: 'display the password'
												}
												onClick={handleClickShowPassowrd}
												onMouseDown={handleMouseDownPassword}
												onMouseUp={handleMouseUpPassword}
												edge='end'
											>
												{showPassword ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								},
							}}
						/>
					</Box>
				</div>
				<div id='button-container'>
					<Button variant='contained' sx={{ width: '100%', height: '50px' }}>
						Login
					</Button>
				</div>
			</div>
		</div>
	)
}
