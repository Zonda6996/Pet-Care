import { useAuth } from '@/modules/Auth'
import { ROUTES } from '@/shared/routes/routes'
import { PageLoader } from '@/shared/ui/PageLoader'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoute = () => {
	const { user, isAuthLoading } = useAuth()

	if (isAuthLoading) {
		return <PageLoader />
	}

	return user ? <Outlet /> : <Navigate to={ROUTES.HOME} replace />
}
