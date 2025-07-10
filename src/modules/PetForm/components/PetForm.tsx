import { Form } from '@/shared/ui/Form'
import { Button } from '@/shared/ui/Button'
import { Loader2Icon } from 'lucide-react'
import {
	FormAge,
	FormBreedCommon,
	FormDate,
	FormName,
	FormGender,
} from './FormComponents'

import { useEffect, useState } from 'react'
import { usePetForm } from '../hooks/usePetForm'
import { useAppDispatch } from '@/store/hooks'
import { useAuth } from '@/modules/Auth'
import { useNavigate } from 'react-router-dom'

import { PetFormSchema } from '../schemas/schema'
import { PetSpeciesType } from '@/shared/constants/breeds'
import { setPetData } from '../store/reducer'
import { ROUTES } from '@/shared/routes/routes'
import { useSavePetMutation } from '../api/petsApi'

export const PetForm = ({ species }: { species: PetSpeciesType }) => {
	const [error, setError] = useState('')
	const navigate = useNavigate()
	const form = usePetForm()
	const {
		formState: { isSubmitting, isSubmitSuccessful },
	} = form
	const dispatch = useAppDispatch()
	const { user } = useAuth()
	const [savePet] = useSavePetMutation()
	console.log(species)

	const handleSumbit = async (values: PetFormSchema) => {
		try {
			if (!user?.uid) {
				console.error('User is not defined')
				return
			}

			const payload = {
				...values,
				userId: user?.uid,
				type: species,
				dob: values.dob.toISOString(),
				createdAt: new Date().toISOString(),
			}

			await savePet({ payload })
			dispatch(setPetData(payload))
			console.log(payload)

			setError('')
		} catch (err) {
			setError('Не удалось сохранить данные. Попробуйте позже.')
			console.error('Save data error:', err)
		}
	}

	useEffect(() => {
		if (isSubmitSuccessful) {
			form.reset()
			navigate(ROUTES.DASHBOARD, { replace: true })
		}
	}, [isSubmitSuccessful])

	return (
		<div className='pt-[120px] py-5 px-5 mx-auto'>
			<h3 className='font-bold text-2xl'>
				Давайте заполним информацию о вашем питомце!
			</h3>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSumbit)}
					className='flex flex-col max-w-[550px] justify-center items-center mt-8 mx-auto space-y-8 bg-white p-5 rounded-2xl shadow-xl'
				>
					<FormName />
					<FormGender />
					<FormBreedCommon species={species} />
					<FormAge />
					<FormDate />
					{error && <p className='text-red-500 text-sm'>{error}</p>}
					<Button className='w-[150px]' disabled={isSubmitting}>
						{isSubmitting && <Loader2Icon className='animate-spin' />}
						{isSubmitting ? 'Сохранение' : 'Продолжить'}
					</Button>
				</form>
			</Form>
		</div>
	)
}
