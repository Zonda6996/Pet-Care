import Logo from '@/shared/assets/icons/logo.svg?react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/routes/routes'
import { Button } from '@/shared/ui/Button'
import NavLink from '@/shared/ui/NavLink'
import { AuthUser } from '@/modules/Auth'

interface HeaderProps {
	user: AuthUser | null
	isAuthLoading: boolean
	onLogout: () => void
}

export const Header = ({ user, isAuthLoading, onLogout }: HeaderProps) => {
	return (
		<header className='flex justify-between items-center px-3 text-white w-full z-20 absolute top-0 left-0 right-0 h-[90px]'>
			<Link
				className='flex items-center space-x-3 hover:opacity-80 transition-opacity '
				to={ROUTES.HOME}
			>
				<Logo className='w-[70px] text-primary' />
				<h1 className='font-extrabold text-[30px] tracking-tighter'>
					Pet Care
				</h1>
			</Link>
			<nav className='ml-[140px]'>
				<ul className='flex gap-6 font-extrabold'>
					<NavLink route={ROUTES.HOME}>Услуги</NavLink>
					<NavLink route={ROUTES.HOME}>Ветклиники</NavLink>
					<NavLink className='text-secondary' route={ROUTES.HOME}>
						+ Добавить питомца
					</NavLink>
					<NavLink route={ROUTES.HOME}>О нас</NavLink>
				</ul>
			</nav>

			<div className='flex justify-end min-w-[330px]'>
				{isAuthLoading ? (
					<Button disabled={isAuthLoading} className='font-extrabold px-7'>
						Выйти
					</Button>
				) : user ? (
					<div>
						<Button onClick={onLogout} className='font-extrabold px-7'>
							Выйти
						</Button>
					</div>
				) : (
					<div className='flex gap-6'>
						<Button className=' font-extrabold px-7'>
							<Link to={ROUTES.LOGIN}>Войти</Link>
						</Button>
						<Button variant='outline' className='font-extrabold px-7'>
							<Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
						</Button>
					</div>
				)}
			</div>
		</header>
	)
}
