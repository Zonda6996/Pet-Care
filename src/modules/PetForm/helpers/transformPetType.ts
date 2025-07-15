import { PetSpeciesType, petTypeMap } from '@/shared/constants/breeds'

export const transformPetType = (
	type: PetSpeciesType,
	gender: string
): string => {

	if (type === 'cat' && gender === 'Женский') return 'Кошка'
	return petTypeMap[type]
}
