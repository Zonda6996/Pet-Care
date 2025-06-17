import { Header, ImagesBackground } from '@/layout'
import { Outlet } from 'react-router-dom'

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
