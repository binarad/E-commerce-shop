import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Admin from './Pages/Admin/Admin.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import AdminLogin from './Pages/Admin/AdminLogin.tsx'
import Error404Page from './Pages/Error404/Error404Page.tsx'
import CartPage from './Pages/Cart/CartPage.tsx'

function Main() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <Error404Page />,
		},
		{
			path: '/admin',
			element: <Admin />,
		},
		{
			path: '/login',
			element: <AdminLogin />,
		},

		{
			path: '/cartpage',
			element: <CartPage />,
		},
	])

	return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Main />
	</StrictMode>
)
