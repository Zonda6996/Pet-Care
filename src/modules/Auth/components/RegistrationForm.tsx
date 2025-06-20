import { Link, useNavigate } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'
import { ROUTES } from '@/shared/routes/routes'
import { Button } from '@/shared/ui/Button'
import { Label } from '@/shared/ui/Label'
import { Input } from '@/shared/ui/Input'
import { useAuth } from '../hooks/useAuth'
import { useEffect, useState } from 'react'

export const RegistrationForm = () => {
	const {
		user,
		registerWithEmail,
		loginWithGoogle,
		isRegistering,
		isLoggingInGoogle,
		loginGoogleError,
		registerError,
		isAuthLoading,
		authError,
		clearAuthError,
	} = useAuth()

	const navigate = useNavigate()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		if (user && !isAuthLoading) {
			navigate(ROUTES.DASHBOARD)
		}
		clearAuthError()
	}, [user, isAuthLoading, navigate, clearAuthError])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		clearAuthError()
		await registerWithEmail({ email, password })
	}

	const handleGoogleLogin = async () => {
		clearAuthError()
		await loginWithGoogle()
	}

	const currentError = (authError || registerError || loginGoogleError) as
		| string
		| null

	return (
		<AuthLayout
			title='Создать учетную запись'
			description='Создайте аккаунт одним из предложенных способов'
			footerText={
				<>
					У вас уже есть учетная запись?<Link to={ROUTES.LOGIN}>Войти</Link>{' '}
				</>
			}
			form={
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col gap-6'>
						<div className='grid gap-3'>
							<Label>Адрес электронной почты</Label>
							<Input
								type='email'
								placeholder='m@example.com'
								required
								autoComplete='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className='grid gap-3'>
							<Label>Пароль</Label>
							<Input
								type='password'
								required
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						{currentError && (
							<p className='text-red-500 text-sm'>{currentError}</p>
						)}
						<div className='flex flex-col gap-3'>
							<Button type='submit' className='w-full' disabled={isRegistering}>
								{isRegistering ? 'Загрузка...' : 'Зарегистрироваться'}
							</Button>
							<Button
								variant='outline'
								className='w-full'
								onClick={handleGoogleLogin}
								disabled={isLoggingInGoogle}
							>
								{isRegistering ? 'Загрузка...' : 'Продолжить с Google'}
							</Button>
						</div>
					</div>
				</form>
			}
		/>
	)
}
