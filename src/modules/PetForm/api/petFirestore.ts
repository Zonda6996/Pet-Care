import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/shared/api/firebase'
import { PetFormSchema } from '../schemas/schema'

export const savePetToFirestore = async (
	data: PetFormSchema,
	userId: string
) => {
	try {
		await addDoc(collection(db, 'pets'), {
			...data,
			dob: data.dob.toISOString(),
			userId,
			createdAt: new Date().toISOString(),
		})
	} catch (error) {
		console.log('Error save to Firestore', error)
	}
}

export const getUserPets = async (userId: string) => {
	const q = query(collection(db, 'pets'), where('userId', '==', userId))
	const snapshot = await getDocs(q)
	return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
