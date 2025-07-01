import 'react-router-dom'
import { PetSpeciesType } from '../constants/breeds'

export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
	RESET_PASSWORD: '/reset-password',
	CHOOSE_ANIMAL: '/choose-animal',
	CHOOSE_ANIMAL_CATEGORY: '/choose-animal/:category',
	CHOOSE_ANIMAL_SPECIES: '/choose-animal/:category/:species',
} as const

export type PathParams = {
	[ROUTES.CHOOSE_ANIMAL_CATEGORY]: {
		category: string
	}
	[ROUTES.CHOOSE_ANIMAL_SPECIES]: {
		category: string
		species: PetSpeciesType
	}
}

declare module 'react-router-dom' {
	interface Register {
		params: PathParams
	}
}

export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES]
