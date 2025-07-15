import avatarPlaceholder from '@/shared/assets/images/avatar-placeholder.png'
import clsx from 'clsx'
import { format } from 'date-fns'
import { transformPetType } from '../helpers/transformPetType'
import { pluralize } from '../helpers/pluralize'
import { Button } from '@/shared/ui/Button'
import { FetchedPetData } from '../types/types'
import { memo, useEffect, useState } from 'react'
import { useDeletePetMutation, useUpdatePetMutation } from '../api/petsApi'

interface PetListItemProps {
	pet: FetchedPetData
}

export const PetListItem = memo(({ pet }: PetListItemProps) => {
	const [deletePet, { isLoading, isSuccess }] = useDeletePetMutation()
	// const [updatePet] = useUpdatePetMutation()
	const handleDelete = async () => {
		if (!pet.id) return
		await deletePet(pet.id)
	}

	// const handleSubmit = async (values: PetFormSchema) => {
	// 	console.log('Текущие ошибки валидации:', errors)
	// 	console.log('click:', values)
	// 	try {
	// 		console.log(values)
	// 		const payload = {
	// 			petname: values.petname,
	// 			age: values.age,
	// 			dob: values.dob.toISOString(),
	// 		}

	// 		await updatePet({ id: pet.id!, data: payload })
	// 		console.log(payload)
	// 	} catch (err) {
	// 		setError('Не удалось изменить данные. Попробуйте позже.')
	// 		console.error('Save data error:', err)
	// 	}
	// }

	const genderClassName = clsx(
		'max-w-[80px] text-sm text-white px-2 py-0.5 rounded-full',
		{
			'bg-blue-400': pet.gender === 'Мужской',
			'bg-pink-400': pet.gender === 'Женский',
		}
	)

	const petTypeClassName = clsx(
		'max-w-[80px] text-sm text-white px-2 py-0.5 rounded-full',
		{
			'bg-green-medium': pet.type === 'cat',
			'bg-brown-medium': pet.type === 'dog',
			'bg-terra-600': pet.type === 'hamster',
		}
	)
	return (
		<div className='px-7 my-8'>
			<div className='flex pl-20 gap-20 px-3 py-7 shadow-lg rounded-md bg-white'>
				<div className='space-y-5'>
					<img
						className='max-h-[250px] rounded-full'
						src={avatarPlaceholder}
						alt='Аватар питомца'
					/>
					<div className='flex gap-5'>
						<Button className='min-w-[120px]' size='sm'>
							Изменить
						</Button>

						<Button
							onClick={handleDelete}
							className='min-w-[120px]'
							size='sm'
							variant='destructive'
							disabled={isLoading && !isSuccess}
						>
							{isLoading && !isSuccess ? 'Удаление' : 'Удалить'}
						</Button>
					</div>
				</div>
				<div className='text-left'>
					<p className='text-3xl font-light'>{pet.petname}</p>
					<div className='flex items-center gap-3 mt-1'>
						<span className={petTypeClassName}>
							{transformPetType(pet.type, pet.gender)}
						</span>
						<span className={genderClassName}>{pet.gender}</span>
					</div>
					<div className='mt-5'>
						<p className='font-medium text-lg'>
							Возраст: {pet.age.years}{' '}
							{pluralize(pet.age.years, ['год', 'года', 'лет'])}&nbsp;
							{pet.age.months}{' '}
							{pluralize(pet.age.months, ['месяц', 'месяца', 'месяцев'])}
						</p>
						<p className='font-medium text-lg'>Порода: {pet.breed}</p>
					</div>
					<p className='mt-5 font-medium text-lg'>
						Дата рождения: {format(new Date(pet.dob), 'dd.MM.yyyy')}
					</p>
				</div>
			</div>
		</div>
	)
})
