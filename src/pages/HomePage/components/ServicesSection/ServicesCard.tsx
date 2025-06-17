import clsx from 'clsx'
import { ArrowRightIcon } from 'lucide-react'
import { ElementType } from 'react'

interface ServicesCardProps {
	IconComponent: ElementType
	iconClassName?: string
	className?: string
	WaveComponent: ElementType
	title: string
	description: string
}

export const ServicesCard = ({
	title,
	description,
	IconComponent,
	iconClassName,
	className,
	WaveComponent,
	...props
}: ServicesCardProps) => {
	return (
		<div
			className={clsx(
				'max-w-[285px] h-[300px] relative rounded-[40px] overflow-hidden text-white shadow-2xl/35 cursor-default transition duration-400 hover:scale-105',
				className
			)}
			{...props}
		>
			<div className='w-full absolute bottom-0 left-0 right-0 z-0'>
				<WaveComponent
					className=' w-full h-full object-cover '
					preserveAspectRatio='xMidYMid slice'
				/>
			</div>

			<div className='relative z-10 flex flex-col justify-between gap-13'>
				<div className='flex justify-center items-center'>
					<IconComponent
						className={clsx(
							'h-[84px] w-[84px] stroke-[0.5px] text-black',
							iconClassName
						)}
					/>
				</div>

				<div className='relative text-center mb-8 gap-4 flex flex-col justify-center items-center'>
					<h3 className='font-black text-2xl'>{title}</h3>
					<p className='font-[Montserrat] text-sm/5 text-balance px-5 h-[110px]'>
						{description}
					</p>
					<ArrowRightIcon className='text-white absolute bottom-0 cursor-pointer' />
				</div>
			</div>
		</div>
	)
}
