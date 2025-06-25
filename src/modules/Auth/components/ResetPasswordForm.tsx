import { Link } from 'react-router-dom'
import { AuthLayout } from './AuthLayout'
import { ROUTES } from '@/shared/routes/routes'
import { ArrowLeftIcon } from 'lucide-react'
import { Input } from '@/shared/ui/Input'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { COOLDOWN_TIME } from '../consts'
import { useCooldown } from '../hooks/useCooldown'

export const ResetPasswordForm = () => {
	const {
		clearAuthError,
		resetPassword,
		isResettingPassword,
		resetPasswordError,
		authError,
	} = useAuth()
	const { cooldown, isActive, start } = useCooldown(COOLDOWN_TIME)

	const currentError = (authError || resetPasswordError) as string | null

	const [email, setEmail] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (isActive) return

		clearAuthError()
		await resetPassword({ email })
		start()
	}

	return (
		<AuthLayout
			className='pt-[150px]'
			title='Восстановить пароль'
			description='Введите свой адрес электронной почты и мы отправим письмо для восстановления пароля'
			form={
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col gap-6'>
						<div className='grid gap-3'>
							<Input
								type='email'
								placeholder='m@example.com'
								required
								autoComplete='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						{currentError && (
							<p className='text-red-500 text-sm'>{currentError}</p>
						)}
						{cooldown > 0 ? (
							<p className='text-sm text-foreground'>
								Если адрес электронной почты зарегистрирован, мы отправим письмо
								с инструкцией.
							</p>
						) : (
							''
						)}
						<Button
							type='submit'
							className='w-full'
							disabled={isResettingPassword || isActive}
						>
							{cooldown > 0 ? `Подождите ${cooldown}с` : 'Отправить письмо'}
						</Button>
					</div>
				</form>
			}
			footerText={
				<Link
					to={ROUTES.LOGIN}
					className='flex gap-2 no-underline! underline-offset-0! items-center hover:opacity-80 transition-opacity'
				>
					<ArrowLeftIcon className='stroke-1' />
					Назад ко входу
				</Link>
			}
		/>
	)
}
