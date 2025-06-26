import clsx from 'clsx'
import { ElementType, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AnimalCategoriesCardProps {
	mainClassName?: string
	primaryIconClassName?: string
	secondaryIconClassName?: string
	footerCircleClassName?: string
	descriptionClassName?: string
	route: string
	title: ReactNode
	description: ReactNode
	PrimaryIconComponent: ElementType
	SecondaryIconComponent: ElementType
}

const AnimalCategoriesCard = ({
	mainClassName,
	primaryIconClassName,
	secondaryIconClassName,
	footerCircleClassName,
	descriptionClassName,
	route,
	title,
	description,
	PrimaryIconComponent,
	SecondaryIconComponent,
}: AnimalCategoriesCardProps) => {
	return (
		<div className='flex flex-col gap-8'>
			<Link
				className={clsx(
					'flex flex-col w-[370px] h-[325px] relative rounded-[20px] shadow-2xl/35 overflow-hidden bg-linear-to-b from-gray-500 hover:scale-105 hover:shadow-2xl/50 transition-all duration-500',
					mainClassName
				)}
				to={route}
			>
				<p className='mt-7 ml-5 text-white font-extrabold text-3xl'>{title}</p>
				<PrimaryIconComponent
					className={clsx(
						'min-w-[265px] min-h-[265px] absolute -right-1/3 top-7 stroke-[1.3px] text-gray-200',
						primaryIconClassName
					)}
				/>
				<SecondaryIconComponent
					className={clsx(
						'w-[45px] h-[45px] absolute text-gray-200 bottom-1/3 left-8',
						secondaryIconClassName
					)}
				/>
				<span
					className={clsx(
						'absolute w-[160px] h-[160px] rounded-full bg-gray-100 -bottom-1/3 left-12',
						footerCircleClassName
					)}
				></span>
			</Link>
			<p
				className={clsx(
					'font-extrabold text-white bg-linear-to-r rounded-[20px] from-gray-500 text-center shadow-md',
					descriptionClassName
				)}
			>
				{description}
			</p>
		</div>
	)
}

export default AnimalCategoriesCard
