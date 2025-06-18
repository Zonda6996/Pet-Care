import { ServicesCards } from './ServicesCards'

export const ServicesSection = () => {
	return (
		<section className='mt-12 px-4'>
			<h2 className='font-extrabold text-4xl text-center'>
				Наши услуги
			</h2>
			<div className='flex justify-center gap-8 mt-10'>
				<ServicesCards />
			</div>
		</section>
	)
}
