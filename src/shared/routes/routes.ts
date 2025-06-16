import 'react-router-dom'

export const ROUTES = {
	HOME: '/',
} as const

// export type PathParams = {}

// declare module 'react-router-dom' {
// 	interface Register {
// 		params: PathParams
// 	}
// }

export type RouteValue = (typeof ROUTES)[keyof typeof ROUTES]
