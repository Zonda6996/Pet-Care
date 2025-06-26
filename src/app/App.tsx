import { HeaderContainer, ImagesBackground } from '@/layout'
import { ROUTES } from '@/shared/routes/routes'
import clsx from 'clsx'
import { Outlet, useLocation } from 'react-router-dom'

function App() {
	const location = useLocation()
	const isAuthPage =
		location.pathname === ROUTES.LOGIN ||
		location.pathname === ROUTES.REGISTER ||
		location.pathname === ROUTES.RESET_PASSWORD

	const homePage = location.pathname === ROUTES.HOME

	const appClasses = clsx('relative min-h-screen bg-light-gray-bg z-0', {
		'bg-white': isAuthPage,
	})

	return (
		<div className={appClasses}>
			{!isAuthPage && <HeaderContainer />}
			{homePage && <ImagesBackground />}
			<main className='mx-auto flex flex-col'>
				<Outlet />
			</main>
		</div>
	)
}

export default App
