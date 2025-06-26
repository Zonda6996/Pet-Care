import { ROUTES } from '@/shared/routes/routes'
import { CatIcon, PawPrintIcon } from 'lucide-react'
import CowIcon from '@/shared/assets/icons/cow.svg?react'
import WheatIcon from '@/shared/assets/icons/wheat.svg?react'
import { href } from 'react-router-dom'
import AnimalCategoriesCard from './AnimalCategoriesCard'

const AnimalCategories = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-10 pt-[130px]'>
			<h3 className='font-extrabold text-3xl'>Выберите категорию животных</h3>
			<div className='flex gap-10 flex-wrap'>
				<AnimalCategoriesCard
					route={href(ROUTES.CHOOSE_ANIMAL_CATEGORY, { category: 'domestic' })}
					title='Домашние'
					description={'Кошки, собаки, хомяки'}
					mainClassName='from-indigo-strong to-indigo-light hover:shadow-indigo-strong'
					PrimaryIconComponent={CatIcon}
					primaryIconClassName='text-indigo-medium'
					SecondaryIconComponent={PawPrintIcon}
					secondaryIconClassName='text-indigo-medium'
					footerCircleClassName='bg-indigo-light'
					descriptionClassName='from-indigo-medium to-indigo-light'
				/>
				<AnimalCategoriesCard
					route={href(ROUTES.CHOOSE_ANIMAL_CATEGORY, { category: 'farm' })}
					title={
						<>
							Сельско
							<br />
							хозяйственные
						</>
					}
					description={'Коровы, лошади, свиньи'}
					mainClassName='from-yellow-strong to-yellow-light hover:shadow-yellow-medium'
					PrimaryIconComponent={CowIcon}
					primaryIconClassName='text-yellow-strong'
					SecondaryIconComponent={WheatIcon}
					secondaryIconClassName='text-yellow-medium'
					footerCircleClassName='bg-yellow-light'
					descriptionClassName='from-yellow-medium to-yellow-strong'
				/>
			</div>
		</div>
	)
}

export default AnimalCategories
