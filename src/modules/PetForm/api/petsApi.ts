import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { FetchedPetData } from '../types/types'
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	updateDoc,
	where,
} from 'firebase/firestore'
import { db } from '@/shared/api/firebase'

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
					console.error('Ошибка при получении питомцев', error)
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
		savePet: builder.mutation<void, { payload: FetchedPetData }>({
			async queryFn({ payload }) {
				try {
					await addDoc(collection(db, 'pets'), payload)
					return { data: undefined }
				} catch (error: unknown) {
					console.error('Ошибка при сохранении в Firestore:', error)
					const errorMessage =
						error instanceof Error ? error.message : 'Неизвестная ошибка.'
					return { error: errorMessage }
				}
			},
			invalidatesTags: [{ type: 'Pets', id: 'LIST' }],
		}),
		deletePet: builder.mutation<void, string>({
			async queryFn(petId) {
				try {
					await deleteDoc(doc(db, 'pets', petId))
					return { data: undefined }
				} catch (error: unknown) {
					console.error('Ошибка при удалении данных:', error)
					const errorMessage =
						error instanceof Error ? error.message : 'Неизвестная ошибка.'
					return { error: errorMessage }
				}
			},
			invalidatesTags: [{ type: 'Pets', id: 'LIST' }],
		}),
		updatePet: builder.mutation<
			void,
			{ id: string; data: Partial<FetchedPetData> }
		>({
			async queryFn({ id, data }) {
				try {
					const docRef = doc(db, 'pets', id)
					await updateDoc(docRef, data)
					return { data: undefined }
				} catch (error: unknown) {
					console.error('Ошибка при обновлении данных:', error)
					const errorMessage =
						error instanceof Error ? error.message : 'Неизвестная ошибка.'
					return { error: errorMessage }
				}
			},
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Pets', id },
				{ type: 'Pets', id: 'LIST' },
			],
		}),
	}),
})

export const { useGetUserPetsQuery, useSavePetMutation, useDeletePetMutation, useUpdatePetMutation } =
	petsApi
