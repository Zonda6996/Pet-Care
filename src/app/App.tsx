import { Header, ImagesBackground } from '@/layout'
import { Outlet } from 'react-router-dom'

function App() {
	return (
		<div className='relative min-h-screen bg-light-gray-bg z-0'>
			<ImagesBackground />
			<Header />
			<main className='max-w-[1380px] mx-auto flex flex-col'>
				<Outlet />
			</main>
		</div>
	)
}

export default App
