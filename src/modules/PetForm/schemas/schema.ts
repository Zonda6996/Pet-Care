import { z } from 'zod'

const genderEnum = z.enum(['Мужской', 'Женский'], {
	required_error: 'Выберите пол питомца',
})

export const petFormSchema = z.object({
	petname: z
		.string()
		.min(2, 'Имя должно содержать минимум 2 символа')
		.max(20, 'Имя не должно быть длиннее 20 символов'),
	age: z.object({
		years: z
			.number({
				invalid_type_error: 'Возраст должен быть числом',
				required_error: 'Укажите возраст питомца',
			})
			.min(0, 'Возраст не может быть отрицательным')
			.max(100, 'Слишком большой возраст'),
		months: z
			.number({
				invalid_type_error: 'Возраст должен быть числом',
				required_error: 'Укажите возраст питомца',
			})
			.min(0, 'Укажите в радиусе от 0 до 12 месяцев')
			.max(12, 'Укажите в радиусе от 0 до 12 месяцев'),
	}),

	breed: z.string({
		required_error: 'Пожалуйста, выберите породу питомца',
	}),
	gender: genderEnum,
	dob: z.date({
		required_error: 'Укажите дату рождения',
	}),
})

export type Gender = z.infer<typeof genderEnum>
export type PetFormSchema = z.infer<typeof petFormSchema>
