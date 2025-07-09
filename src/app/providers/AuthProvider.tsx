import { AuthUser, setError, setLoading, setUser } from '@/modules/Auth'
import { auth } from '@/shared/api/firebase'
import { useAppDispatch } from '@/store/hooks'
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth'
import { ReactNode, useEffect } from 'react'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setLoading(true))

		const unsubscribe = onAuthStateChanged(
			auth,
			(firebaseUser: FirebaseUser | null) => {
				if (firebaseUser) {
					const serializableUser: AuthUser = {
						uid: firebaseUser.uid,
						email: firebaseUser.email,
						displayName: firebaseUser.displayName,
						photoURL: firebaseUser.photoURL,
						emailVerified: firebaseUser.emailVerified,
					}
					dispatch(setUser(serializableUser))
				} else {
					dispatch(setUser(null))
				}
				dispatch(setLoading(false))
			},
			firebaseError => {
				console.error('Error in onAuthStateChanged:', firebaseError)
				dispatch(
					setError(
						(firebaseError as Error).message ||
							'Ошибка отслеживания статуса аутентификации.'
					)
				)
				dispatch(setLoading(false))
			}
		)
		return () => unsubscribe()
	}, [dispatch])

	return <>{children}</>
}
