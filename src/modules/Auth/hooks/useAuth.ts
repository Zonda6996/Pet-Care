import { useAppDispatch } from '@/store/hooks'
import { useAppSelector } from '@/store/hooks'
import {
	useLoginWithEmailMutation,
	useLoginWithGoogleMutation,
	useLogoutMutation,
	useRegisterWithEmailMutation,
	useResetPasswordMutation,
	authApi,
} from '../api/authApi'
import { useEffect } from 'react'
import { cleanError, setError } from '../store/reducer'
import { selectError, selectIsLoading, selectUser } from '../store/selectors'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/routes/routes'

export const useAuth = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const user = useAppSelector(selectUser)
	const isLoading = useAppSelector(selectIsLoading)
	const error = useAppSelector(selectError)

	const [loginWithEmail, { isLoading: isLoggingIn, error: loginError }] =
		useLoginWithEmailMutation()
	const [
		registerWithEmail,
		{ isLoading: isRegistering, error: registerError },
	] = useRegisterWithEmailMutation()
	const [
		loginWithGoogle,
		{ isLoading: isLoggingInGoogle, error: loginGoogleError },
	] = useLoginWithGoogleMutation()
	const [logout, { isLoading: isLoggingOut, error: logoutError }] =
		useLogoutMutation()
	const [
		resetPassword,
		{ isLoading: isResettingPassword, error: resetPasswordError },
	] = useResetPasswordMutation()

	useEffect(() => {
		const firstError =
			loginError ||
			registerError ||
			loginGoogleError ||
			logoutError ||
			resetPasswordError

		if (firstError) dispatch(setError(firstError as string))
		else dispatch(cleanError())
	}, [
		loginError,
		registerError,
		loginGoogleError,
		logoutError,
		resetPasswordError,
	])

	const handleLogout = async () => {
		try {
			await logout()
			navigate(ROUTES.HOME)
			dispatch(authApi.util.resetApiState())
			dispatch(cleanError())
		} catch (error) {
			console.error(
				'Error during logout process (handleLogout wrapper):',
				error
			)
		}
	}

	return {
		user,
		isAuthLoading: isLoading,
		authError: error,
		clearAuthError: () => dispatch(cleanError()),

		loginWithEmail,
		registerWithEmail,
		loginWithGoogle,
		logout: handleLogout,
		resetPassword,

		isLoggingIn,
		loginError,
		isRegistering,
		registerError,
		isLoggingInGoogle,
		loginGoogleError,
		isLoggingOut,
		logoutError,
		isResettingPassword,
		resetPasswordError,
	}
}
