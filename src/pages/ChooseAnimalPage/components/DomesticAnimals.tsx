import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import catSlider from '@/shared/assets/images/catSlider.webp'
import dogSlider from '@/shared/assets/images/dogSlider.webp'
import hamsterSlider from '@/shared/assets/images/hamsterSlider.webp'
import { DomesticAnimalSlide } from './DomesticAnimalSlider'
import { ROUTES } from '@/shared/routes/routes'
import { href } from 'react-router-dom'

export const DomesticAnimals = () => {
	return (
		<div className='pt-[90px]'>
			<Swiper
				direction={'vertical'}
				slidesPerView={1}
				spaceBetween={30}
				mousewheel={true}
				pagination={{
					clickable: true,
				}}
				modules={[Mousewheel, Pagination]}
				className='mySwiper h-screen'
			>
				<SwiperSlide>
					<DomesticAnimalSlide
						title={
							<>
								Кошка
								<br />
								Кот
							</>
						}
						description='Ласковые, самостоятельные и не требуют выгула. Кошки отлично подойдут людям, ценящим уют и тишину в доме.'
						imgURL={catSlider}
						alt='Кот'
						slideClassName='from-brown-light! to-brown-strong'
						buttonClassName='bg-brown-medium hover:bg-brown-light'
						route={href(ROUTES.CHOOSE_ANIMAL_SPECIES, {
							category: 'domestic',
							species: 'cat',
						})}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<DomesticAnimalSlide
						title='Собака'
						description='Верный, энергичный и преданный друг.
						Идеален для активных людей, готовых к прогулкам и играм.'
						imgURL={dogSlider}
						alt='Собака'
						slideClassName='from-green-light to-green-strong'
						buttonClassName='bg-green-medium hover:bg-green-light'
						route={href(ROUTES.CHOOSE_ANIMAL_SPECIES, {
							category: 'domestic',
							species: 'dog',
						})}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<DomesticAnimalSlide
						title='Хомяк'
						description='Маленький и неприхотливый пушистик.
						Идеален для детей и тех, кто хочет простого питомца без хлопот.'
						imgURL={hamsterSlider}
						alt='Хомяк'
						slideClassName='from-terra-700 to-terra-200'
						buttonClassName='bg-terra-600 hover:bg-terra-700'
						route={href(ROUTES.CHOOSE_ANIMAL_SPECIES, {
							category: 'domestic',
							species: 'hamster',
						})}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<DomesticAnimalSlide
						title='В разработке...'
						description=''
						buttonClassName='hidden'
						alt='Placeholder'
						route=''
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
