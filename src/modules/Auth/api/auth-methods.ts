import {
	UserCredential,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword as fbSignInWithEmailAndPassword,
	signInWithPopup,
	signOut as fbSignOut,
	GoogleAuthProvider,
	sendPasswordResetEmail as fbSendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '@/shared/api/firebase'
import { handleAuthError } from './error-handlers'

const googleProvider = new GoogleAuthProvider()

export const signInWithEmailAndPassword = async (
	email: string,
	password: string
): Promise<UserCredential> => {
	try {
		const userCredential = await fbSignInWithEmailAndPassword(
			auth,
			email,
			password
		)
		return userCredential
	} catch (error: unknown) {
		throw handleAuthError(error)
	}
}

export const signUpWithEmailAndPassword = async (
	email: string,
	password: string
): Promise<UserCredential> => {
	try {
		const userCredential = createUserWithEmailAndPassword(auth, email, password)
		return userCredential
	} catch (error: unknown) {
		throw handleAuthError(error)
	}
}

export const signInWithGoogle = async (): Promise<UserCredential> => {
	try {
		const userCredential = await signInWithPopup(auth, googleProvider)
		return userCredential
	} catch (error: unknown) {
		throw handleAuthError(error)
	}
}

export const signOut = async (): Promise<void> => {
	try {
		await fbSignOut(auth)
	} catch (error: unknown) {
		throw handleAuthError(error)
	}
}

export const sendPasswordResetEmail = async (email: string): Promise<void> => {
	try {
		await fbSendPasswordResetEmail(auth, email)
	} catch (error: unknown) {
		throw handleAuthError(error)
	}
}
