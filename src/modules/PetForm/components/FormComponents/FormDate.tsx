import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/shared/ui/Form'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover'
import { Button } from '@/shared/ui/Button'

import clsx from 'clsx'
import { ru } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '@/shared/ui/Calendar'
import { format } from 'date-fns'
import { useFormContext } from 'react-hook-form'
import { PetFormSchema } from '../../schemas/schema'

export const FormDate = () => {
	const form = useFormContext<PetFormSchema>()

	return (
		<FormField
			name='dob'
			control={form.control}
			render={({ field }) => (
				<FormItem>
					<FormLabel>Дата рождения питомца</FormLabel>
					<Popover>
						<PopoverTrigger asChild>
							<FormControl>
								<Button
									variant='outline'
									className={clsx(
										'flex justify-between w-[240px] pl-3',
										!field.value && 'text-muted-foreground'
									)}
								>
									{field.value ? (
										format(field.value, 'PPP', { locale: ru })
									) : (
										<span>Выберите дату</span>
									)}
									<CalendarIcon />
								</Button>
							</FormControl>
						</PopoverTrigger>
						<PopoverContent className='w-auto p-0' align='start'>
							<Calendar
								mode='single'
								selected={field.value}
								onSelect={field.onChange}
								disabled={date =>
									date > new Date() || date < new Date('1900-01-01')
								}
								captionLayout='dropdown'
							/>
						</PopoverContent>
					</Popover>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
