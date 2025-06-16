import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ServicesCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

export const ServicesCard = ({ children }: ServicesCardProps) => {
	return (
		<button className='max-w-[270px] border-t-2 border-secondary flex flex-col items-center rounded-md font-semibold gap-3 cursor-pointer hover:scale-105 duration-300 transition group bg-linear-to-t from-pink-300 to-white shadow-lg shadow-secondary'>
			{children}
		</button>
	)
}
