import { PathParams, ROUTES } from '@/shared/routes/routes'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import { PetForm } from '@/modules/PetForm'
import { breeds, PetSpeciesType } from '@/shared/constants/breeds'

function AnimalFormPage() {
	const { species } =
		useParams<PathParams[typeof ROUTES.CHOOSE_ANIMAL_SPECIES]>()

	const isValidSpecies = (value: string): value is PetSpeciesType => {
		return value in breeds
	}

	if (!species || !isValidSpecies(species)) {
		return <NotFoundPage />
	}

	return <PetForm species={species} />
}

export const Component = AnimalFormPage
