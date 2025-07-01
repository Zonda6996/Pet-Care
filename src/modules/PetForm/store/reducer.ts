import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PetData } from '../types/types'

const initialState: PetData = {
	petname: '',
	gender: 'Мужской',
	breed: '',
	age: {
		months: 0,
		years: 0,
	},
	dob: null,
}

const petSlice = createSlice({
	name: 'pet',
	initialState,
	reducers: {
		setPetData(state, action: PayloadAction<PetData>) {
			return action.payload
		},
	},
})

export const { setPetData } = petSlice.actions
export const petReducer = petSlice.reducer
