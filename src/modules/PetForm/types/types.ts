import { PetSpeciesType } from '@/shared/constants/breeds'

export type PetDataSlice = {
	petname: string
	gender: string
	breed: string
	age: {
		months: number
		years: number
	}
	dob: string
	type: PetSpeciesType
}

export type FetchedPetData = {
	id?: string
	petname: string
	gender: string
	breed: string
	age: {
		years: number
		months: number
	}
	dob: string
	type: PetSpeciesType
	userId: string
	createdAt: string
}
