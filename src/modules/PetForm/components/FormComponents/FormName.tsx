import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from '@/shared/ui/Form'
import { Input } from '@/shared/ui/Input'
import { useFormContext } from 'react-hook-form'
import { PetFormSchema } from '../../schemas/schema'

export const FormName = () => {
	const form = useFormContext<PetFormSchema>()

	return (
		<FormField
			name='petname'
			control={form.control}
			render={({ field }) => (
				<FormItem>
					<FormLabel>Имя питомца</FormLabel>
					<FormControl>
						<Input className='max-w-[300px]' placeholder='Мурка' {...field} />
					</FormControl>
					<FormDescription>Это ваше отображаемое имя питомца.</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
