import 'react-router-dom'

export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
	RESET_PASSWORD: '/reset-password',
	CHOOSE_ANIMAL: '/choose-animal',
	CHOOSE_ANIMAL_CATEGORY: '/choose-animal/:category',
} as const

export type PathParams = {
	[ROUTES.CHOOSE_ANIMAL_CATEGORY]: {
		category: string
	}
}

declare module 'react-router-dom' {
	interface Register {
		params: PathParams
	}
}

export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES]
