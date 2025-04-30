import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Admin from './Admin/Admin.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

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
