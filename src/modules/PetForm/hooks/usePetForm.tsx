import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PetFormSchema, petFormSchema } from '../schemas/schema'

export const usePetForm = () => {
	const form = useForm<PetFormSchema>({
		resolver: zodResolver(petFormSchema),
		defaultValues: {
			petname: '',
			breed: '',
			age: {
				months: 0,
				years: 0,
			},
			dob: undefined,
		},
	})

	return form
}
