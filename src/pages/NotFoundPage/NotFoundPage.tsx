import { ROUTES } from '@/shared/routes/routes'
import { Button } from '@/shared/ui/Button'
import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
	return (
		<div className='pt-[140px] text-center space-y-5'>
			<div className='flex flex-col gap-3'>
				<span className='font-extrabold text-9xl'>404</span>
				<p className='font-bold text-2xl'>Что-то пошло не так...</p>
				<p className='font-light text-xl'>
					Страница отсутствует, или вы перешли по неккоректному адресу.
				</p>
			</div>
			<Link className='text-primary font-light text-xl' to={ROUTES.HOME}>
				<Button>
					На главную
					<ArrowRightIcon className='mt-0.5' />
				</Button>
			</Link>
		</div>
	)
}

export const Component = NotFoundPage
