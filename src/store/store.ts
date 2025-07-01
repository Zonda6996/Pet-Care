import { configureStore } from '@reduxjs/toolkit'
import { authReducer, authApi } from '@/modules/Auth'
import { petReducer } from '@/modules/PetForm'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		pet: petReducer,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
