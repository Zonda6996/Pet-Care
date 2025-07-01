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

export const FormAge = () => {
	const form = useFormContext<PetFormSchema>()

	return (
		<div className='flex justify-between gap-8'>
			<FormField
				name='age.years'
				control={form.control}
				render={({ field }) => (
					<FormItem className='flex-1/2'>
						<FormLabel>Укажите полное количество лет</FormLabel>
						<FormControl>
							<Input
								min={0}
								placeholder='1'
								type='number'
								{...field}
								onChange={e => field.onChange(Number(e.target.value))}
							/>
						</FormControl>
						<FormDescription>
							Возраст вашего питомца. Если возраст меньше года, укажите 0.
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
			<FormField
				name='age.months'
				control={form.control}
				render={({ field }) => (
					<FormItem className='flex-1/2'>
						<FormLabel>Укажите количество месяцев</FormLabel>
						<FormControl>
							<Input
								min={0}
								placeholder='1'
								type='number'
								{...field}
								onChange={e => field.onChange(Number(e.target.value))}
							/>
						</FormControl>
						<FormDescription>
							Количество месяцев. Укажите от 0 до 12.
						</FormDescription>
						<FormMessage />
					</FormItem>
				)}
			/>
		</div>
	)
}
