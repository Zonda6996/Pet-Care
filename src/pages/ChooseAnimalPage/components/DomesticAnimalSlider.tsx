import { Button } from '@/shared/ui/Button'
import { ReactNode } from 'react'
import clsx from 'clsx'
import imgSliderPlaceholder from '@/shared/assets/svg/imgSliderPlaceholder.svg'

interface DomesticAnimalSlideProps {
	slideClassName?: string
	title: ReactNode
	description: ReactNode
	buttonClassName?: string
	imgURL?: string
	alt: string
}

export const DomesticAnimalSlide = ({
	description,
	imgURL,
	alt,
	title,
	buttonClassName,
	slideClassName,
}: DomesticAnimalSlideProps) => {
	return (
		<div
			className={clsx(
				'w-full h-full pt-20 px-[15px] bg-linear-to-b from-gray-300',
				slideClassName
			)}
		>
			<div className='flex justify-evenly max-w-[1380px] mx-auto gap-15 items-center'>
				<div className='space-y-5'>
					<p className='text-white text-7xl font-extrabold uppercase'>
						{title}
					</p>

					<p className='max-w-[400px] font-light text-white'>{description}</p>
					<Button
						size='lg'
						className={clsx(
							'bg-gray-500 w-[150px] hover:bg-gray-400',
							buttonClassName
						)}
					>
						Выбрать
					</Button>
				</div>
				<img
					className='w-[280px] min-h-[420px] object-cover rounded-full shadow-2xl/50 hover:scale-105 transition-transform duration-500'
					src={imgURL || imgSliderPlaceholder}
					alt={alt}
				/>
			</div>
		</div>
	)
}
