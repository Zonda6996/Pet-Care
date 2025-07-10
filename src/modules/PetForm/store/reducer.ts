import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PetDataSlice } from '../types/types'

const initialState: PetDataSlice = {
	petname: '',
	gender: 'Мужской',
	breed: '',
	age: {
		months: 0,
		years: 0,
	},
	dob: '',
	type: 'unknown',
}

const petSlice = createSlice({
	name: 'pet',
	initialState,
	reducers: {
		setPetData(state, action: PayloadAction<PetDataSlice>) {
			return action.payload
		},
	},
})

export const { setPetData } = petSlice.actions
export const petReducer = petSlice.reducer
