import { useAuth } from '@/modules/Auth'
import { useGetUserPetsQuery } from '../api/petsApi'
import { PetListItem } from './PetListItem'

export const PetList = () => {
	const { user } = useAuth()

	const {
		data: pets,
		isLoading,
		error,
	} = useGetUserPetsQuery(user?.uid!, {
		skip: !user,
	})

	if (isLoading) return <div>Загрузка...</div>
	if (error) return <div>Ошибка: {String(error)}</div>

	console.log(pets)

	return (
		<div>
			{pets?.length === 0 ? <div>У вас нет питомцев</div> : null}
			{pets?.map(pet => (
				<PetListItem key={pet.id} pet={pet} />
			))}
		</div>
	)
}
