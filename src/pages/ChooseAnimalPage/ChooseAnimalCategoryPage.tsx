import { PathParams, ROUTES } from '@/shared/routes/routes'
import { useParams } from 'react-router-dom'
import { DomesticAnimals } from './components/DomesticAnimals'
import { FarmAnimals } from './components/FarmAnimals'

function ChooseAnimalCategoryPage() {
	const params = useParams<PathParams[typeof ROUTES.CHOOSE_ANIMAL_CATEGORY]>()

	if (params.category === 'domestic') {
		return <DomesticAnimals />
	}
	if (params.category === 'farm') {
		return <FarmAnimals />
	}

	return (
		<div className='text-center font-extrabold text-3xl pt-[150px]'>
			Категория не найдена
		</div>
	)
}

export const Component = ChooseAnimalCategoryPage
