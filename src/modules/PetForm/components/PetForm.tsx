import { Form } from '@/shared/ui/Form'
import { PetFormSchema } from '../schemas/schema'
import { Button } from '@/shared/ui/Button'
import { FormName } from './FormComponents/FormName'
import { FormGender } from './FormComponents/FormGender'
import { FormBreedCommon } from './FormComponents/FormBreedCommon'
import { FormAge } from './FormComponents/FormAge'
import { FormDate } from './FormComponents/FormDate'
import { PetSpeciesType } from '@/shared/constants/breeds'
import { usePetForm } from '../hooks/usePetForm'
import { useAppDispatch } from '@/store/hooks'
import { setPetData } from '../store/reducer'

export const PetForm = ({ species }: { species: PetSpeciesType }) => {
	const form = usePetForm()
	const dispatch = useAppDispatch()

	const handleSumbit = (values: PetFormSchema) => {
		const payload = {
			...values,
			dob: values.dob.toISOString(),
		}
		dispatch(setPetData(payload))
		console.log('Сохранено в Redux:', payload)
	}

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
					<Button>Продолжить</Button>
				</form>
			</Form>
		</div>
	)
}
