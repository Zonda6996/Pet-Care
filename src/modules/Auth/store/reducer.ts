import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthUser } from '../types/auth'

interface AuthState {
	user: AuthUser | null
	isLoading: boolean
	error: string | null
}

const initialState: AuthState = {
	user: null,
	isLoading: true,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<AuthUser | null>) => {
			state.user = action.payload
			state.isLoading = false
			state.error = null
		},
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		setError: (state, action: PayloadAction<string | null>) => {
			state.error = action.payload
		},
		cleanError: state => {
			state.error = null
		},
	},
})

export const { setUser, setLoading, setError, cleanError } = authSlice.actions
export const authReducer = authSlice.reducer
