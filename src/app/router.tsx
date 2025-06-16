import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { ROUTES } from '@/shared/routes/routes'

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: ROUTES.HOME,
				lazy: () => import('@/pages/HomePage/HomePage.tsx'),
			},
		],
	},
])
