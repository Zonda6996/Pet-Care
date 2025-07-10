import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from '@/shared/ui/Form'
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/shared/ui/Select'
import { breeds, PetSpeciesType } from '@/shared/constants/breeds'
import { useFormContext } from 'react-hook-form'
import { PetFormSchema } from '../../schemas/schema'

interface FormBreedCommonProps {
	species: PetSpeciesType
}

export const FormBreedCommon = ({ species }: FormBreedCommonProps) => {
	const form = useFormContext<PetFormSchema>()

	return (
		<FormField
			name='breed'
			control={form.control}
			render={({ field }) => (
				<FormItem className='flex flex-col items-center justify-center'>
					<FormLabel>Порода питомца</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder='Выберите породу вашего питомца' />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{breeds[species].map(breed => (
								<SelectItem key={breed} value={breed}>
									{breed}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<FormDescription>
						Если вы не знаете какую породу выбрать, нажмите на "Другая"
					</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
