import Logo from '@/shared/assets/icons/logo.svg?react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/routes/routes'
import { Button } from '@/shared/ui/Button'
import NavLink from '@/shared/ui/NavLink'

export const Header = () => {
	return (
		<header className='flex items-center px-3 text-white w-full z-20 absolute top-0 left-0 right-0 h-[90px]'>
			<Link
				className='flex items-center space-x-3 hover:opacity-80 transition-opacity '
				to={ROUTES.HOME}
			>
				<Logo className='w-[70px] text-primary' />
				<h1 className='font-extrabold text-[30px] tracking-tighter'>
					Pet Care
				</h1>
			</Link>
			<nav className='ml-auto mr-23'>
				<ul className='flex gap-6 font-extrabold'>
					<NavLink route={ROUTES.HOME}>Услуги</NavLink>
					<NavLink route={ROUTES.HOME}>Ветклиники</NavLink>
					<NavLink className='text-secondary' route={ROUTES.HOME}>
						+ Добавить питомца
					</NavLink>
					<NavLink route={ROUTES.HOME}>О нас</NavLink>
				</ul>
			</nav>
			<Button className='ml-auto font-extrabold px-7'>Войти</Button>
		</header>
	)
}
