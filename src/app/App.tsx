import { Header } from '@/layout'
import { Outlet } from 'react-router-dom'
import { ImagesBackground } from '@/layout/HeroSection/components/ImagesBackground'

function App() {
	return (
		<div className='relative min-h-screen'>
			<ImagesBackground />
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
