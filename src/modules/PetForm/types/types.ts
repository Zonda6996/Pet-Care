export type FetchedPetData = {
	id: string
	userId: string
	createdAt: string
	petname: string
	breed: string
	dob: string
	age: {
		years: number
		months: number
	}
	gender: string
}
