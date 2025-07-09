import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { FetchedPetData } from '../types/types'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/shared/api/firebase'
import { PetFormSchema } from '../schemas/schema'

export const petsApi = createApi({
	reducerPath: 'petsApi',
	tagTypes: ['Pets'],
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		getUserPets: builder.query<FetchedPetData[], string>({
			async queryFn(userId) {
				try {
					const q = query(collection(db, 'pets'), where('userId', '==', userId))
					const snapshot = await getDocs(q)
					const pets = snapshot.docs.map(doc => ({
						id: doc.id,
						...doc.data(),
					})) as FetchedPetData[]
					return { data: pets }
				} catch (error: unknown) {
					const errorMessage =
						error instanceof Error ? error.message : 'Неизвестная ошибка.'
					return { error: errorMessage }
				}
			},
			providesTags: result =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Pets' as const, id })),
							{ type: 'Pets', id: 'LIST' },
					  ]
					: [{ type: 'Pets', id: 'LIST' }],
		}),
		savePet: builder.mutation<void, { data: PetFormSchema; userId: string }>({
			async queryFn({ data, userId }) {
				try {
					await addDoc(collection(db, 'pets'), {
						...data,
						dob: data.dob.toISOString(),
						userId,
						createdAt: new Date().toISOString(),
					})
					return { data: undefined }
				} catch (error: unknown) {
					const errorMessage =
						error instanceof Error ? error.message : 'Неизвестная ошибка.'
					return { error: errorMessage }
				}
			},
			invalidatesTags: [{ type: 'Pets', id: 'LIST' }],
		}),
	}),
})

export const { useGetUserPetsQuery, useSavePetMutation } = petsApi
