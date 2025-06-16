import { ServicesCards } from './components/ServicesCards'

export const ServicesSection = () => {
	return (
		<div className='mt-6 mb-20'>
			<h2 className='font-extrabold text-4xl font-[Montserrat] text-center'>
				Наши услуги
			</h2>
			<div className='flex justify-center gap-8 mt-10'>
				<ServicesCards />
			</div>
		</div>
	)
}
