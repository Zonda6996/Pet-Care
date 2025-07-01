import {
	FormField,
	FormItem,
	FormControl,
	FormLabel,
	FormMessage,
} from '@/shared/ui/Form'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/RadioGroup'
import { useFormContext } from 'react-hook-form'
import { PetFormSchema } from '../../schemas/schema'

export const FormGender = () => {
	const form = useFormContext<PetFormSchema>()

	return (
		<FormField
			name='gender'
			control={form.control}
			render={({ field }) => (
				<FormItem className='border rounded-md p-5 w-3/4'>
					<label className='text-center flex items-center justify-center'>
						Выберите пол питомца
					</label>
					<FormControl>
						<RadioGroup
							className='flex justify-evenly'
							onValueChange={field.onChange}
							defaultValue={field.value}
						>
							<FormItem>
								<FormControl>
									<RadioGroupItem value='Мужской' />
								</FormControl>
								<FormLabel>Мужской</FormLabel>
							</FormItem>
							<FormItem>
								<FormControl>
									<RadioGroupItem value='Женский' />
								</FormControl>
								<FormLabel>Женский</FormLabel>
							</FormItem>
						</RadioGroup>
					</FormControl>
					<FormMessage className='text-center'/>
				</FormItem>
			)}
		/>
	)
}
