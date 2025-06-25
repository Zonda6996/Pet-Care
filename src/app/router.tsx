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
				path: ROUTES.CHOOSE_ANIMAL,
				hydrateFallbackElement: <PageLoader />,
				lazy: () => import('@/pages/ChooseAnimalPage/ChooseAnimalPage.tsx'),
			},
			{
				path: ROUTES.CHOOSE_ANIMAL_CATEGORY,
				hydrateFallbackElement: <PageLoader />,
				lazy: () =>
					import('@/pages/ChooseAnimalPage/ChooseAnimalCategoryPage.tsx'),
			},
			{
				path: '*',
				HydrateFallback: () => null,
				lazy: () => import('@/pages/NotFoundPage/NotFoundPage.tsx'),
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
