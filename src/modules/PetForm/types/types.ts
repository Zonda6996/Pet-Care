import { Gender } from '../schemas/schema'

export interface PetData {
	petname: string
	gender: Gender
	breed: string
	age: {
		years: number
		months: number
	}
	dob: string
}
