import { useAuth } from '@/modules/Auth'
import { useGetUserPetsQuery } from '../api/petsApi'
import avatarPlaceholder from '@/shared/assets/images/avatar-placeholder.png'
import clsx from 'clsx'
import { format } from 'date-fns'

export const PetInfo = () => {
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
			{pets?.map(pet => (
				<div className='px-7 my-8' key={pet.id}>
					<div className='flex pl-20 gap-20 px-3 py-7 border shadow-md'>
						<div>
							<img
								className='max-h-[250px] rounded-full'
								src={avatarPlaceholder}
								alt='Аватар питомца'
							/>
						</div>
						<div className='text-left'>
							<p className='text-3xl font-light'>{pet.petname}</p>
							<span
								className={clsx(
									'max-w-[80px] text-sm text-white px-2 py-0.5 flex items-center justify-center rounded-full mt-1',
									{
										'bg-blue-400': pet.gender === 'Мужской',
										'bg-pink-400': pet.gender === 'Женский',
									}
								)}
							>
								{pet.gender}
							</span>
							<div className='mt-5'>
								<p className='font-medium text-lg'>
									Возраст: {pet.age.years} лет {pet.age.months} месяцев
								</p>
								<p className='font-medium text-lg'>Порода: {pet.breed}</p>
							</div>
							<p className='mt-5 font-medium text-lg'>
								Дата рождения: {format(new Date(pet.dob), 'dd.MM.yyyy')}
							</p>
							<p>{pet.type}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
