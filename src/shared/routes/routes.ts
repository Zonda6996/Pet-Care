import 'react-router-dom'

export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	DASHBOARD: '/dashboard',
	RESET_PASSWORD: '/reset-password',
} as const

// export type PathParams = {}

// declare module 'react-router-dom' {
// 	interface Register {
// 		params: PathParams
// 	}
// }

export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES]
