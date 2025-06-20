import { useAuth } from '@/modules/Auth'
import { Header } from './Header'

export const HeaderContainer = () => {
	const { user, isAuthLoading, logout } = useAuth()

	const handleLogout = async () => {
		await logout()
	}

	return (
		<Header user={user} isAuthLoading={isAuthLoading} onLogout={handleLogout} />
	)
}
