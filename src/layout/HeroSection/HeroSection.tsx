import { Button } from '@/shared/ui/Button'
import { PawPrintIcon, WrenchIcon } from 'lucide-react'

export const HeroSection = () => {
	return (
		<section className='font-[Montserrat] relative min-h-screen flex flex-col justify-start items-center pt-[90px]'>
			<div className='text-center text-white space-y-8 pt-[5vh]'>
				<h1 className=' text-4xl font-extrabold '>
					Найдите лучший план для своих животных
				</h1>
				<h2 className='max-w-[500px] m-auto text-xl p-2 font-semibold'>
					<span className='text-secondary'>Все для счастливой жизни</span> ваших
					животных учет здоровья, болезни, питание, множество услуг, поддержка
					24/7.
				</h2>
			</div>
			<div className='flex mt-10  items-center justify-center gap-10'>
				<Button className='w-full py-6 shadow-xs max-w-[180px] hover:scale-105 duration-400 leading-tight'>
					Выбрать животное
					<PawPrintIcon />
				</Button>

				<Button
					variant='outline'
					className='w-full py-6 shadow-xs max-w-[180px] bg-transparent text-white hover:opacity-60 duration-400'
				>
					Услуги
					<WrenchIcon />
				</Button>
			</div>
		</section>
	)
}
