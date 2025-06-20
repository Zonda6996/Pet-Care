import { User as FirebaseUser } from 'firebase/auth'
import { AuthUser } from '../types/auth'

export const transformFirebaseUser = (
	firebaseUser: FirebaseUser
): AuthUser => ({
	uid: firebaseUser.uid,
	email: firebaseUser.email,
	displayName: firebaseUser.displayName,
	photoURL: firebaseUser.photoURL,
	emailVerified: firebaseUser.emailVerified,
})
