import Logo from '@/shared/assets/icons/logo.svg?react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/routes'
import { Button } from './Button'

function Header() {
	return (
		<header className='flex items-center p-3'>
			<div className='flex items-center space-x-3'>
				<Link to='/'>
					<Logo className='w-[80px] text-primary hover:opacity-90 transition-opacity' />
				</Link>
				<h1 className='font-extrabold text-[30px] tracking-tighter'>
					Pet Care
				</h1>
			</div>
			<nav className='ml-10'>
				<ul className='flex gap-6 font-extrabold'>
					<li>
						<Link to={ROUTES.HOME}>Услуги</Link>
					</li>
					<li>
						<Link to={ROUTES.HOME}>Ветклиники</Link>
					</li>
					<li>
						<Link to={ROUTES.HOME}>+ Добавить питомца</Link>
					</li>
					<li>
						<Link to={ROUTES.HOME}>О нас</Link>
					</li>
				</ul>
			</nav>
			<Button className='ml-auto font-extrabold px-7'>Войти</Button>
		</header>
	)
}

export default Header
