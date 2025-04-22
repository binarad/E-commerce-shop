import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Admin from './Admin/Admin.tsx'

function Main() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
		},
		{
			path: '/admin',
			element: <Admin />,
		},
	])

	return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Main />
	</StrictMode>
)
