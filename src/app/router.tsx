import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { ROUTES } from '@/shared/routes/routes'
import { PrivateRoute } from './providers/PrivateRoute'
import { PageLoader } from '@/shared/ui/PageLoader'

export const router = createBrowserRouter([
	{
		element: <App />,
		HydrateFallback: () => null,
		children: [
			{
				path: ROUTES.HOME,
				hydrateFallbackElement: <PageLoader />,
				lazy: () => import('@/pages/HomePage/HomePage.tsx'),
			},
			{
				path: ROUTES.LOGIN,
				HydrateFallback: () => null,
				lazy: () => import('@/pages/AuthPage/LoginPage.tsx'),
			},
			{
				path: ROUTES.REGISTER,
				HydrateFallback: () => null,
				lazy: () => import('@/pages/AuthPage/RegisterPage.tsx'),
			},
			{
				path: ROUTES.RESET_PASSWORD,
				HydrateFallback: () => null,
				lazy: () => import('@/pages/AuthPage/ResetPasswordPage.tsx'),
			},
			{
				path: '*',
				element: <div style={{ color: 'red' }}>Маршрут не найден</div>,
			},

			{
				element: <PrivateRoute />,
				HydrateFallback: () => null,
				children: [
					{
						path: ROUTES.DASHBOARD,
						hydrateFallbackElement: <PageLoader />,
						lazy: () => import('@/pages/DashboardPage/DashboardPage.tsx'),
					},
				],
			},
		],
	},
])
