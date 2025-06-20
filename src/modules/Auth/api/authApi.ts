import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { AuthUser } from '../types/auth'
import {
	signInWithEmailAndPassword,
	signUpWithEmailAndPassword,
	signInWithGoogle,
	signOut,
	sendPasswordResetEmail,
} from './auth-methods'
import { transformFirebaseUser } from '../helpers'

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fakeBaseQuery(),
	endpoints: builder => ({
		loginWithEmail: builder.mutation<
			AuthUser,
			{ email: string; password: string }
		>({
			async queryFn({ email, password }) {
				try {
					const userCredential = await signInWithEmailAndPassword(
						email,
						password
					)
					const serializableUser = transformFirebaseUser(userCredential.user)
					return { data: serializableUser }
				} catch (error: unknown) {
					const errorMessage =
						error instanceof Error ? error.message : 'Неизвестная ошибка.'
					return { error: errorMessage }
				}
			},
		}),

		registerWithEmail: builder.mutation<
			AuthUser,
			{ email: string; password: string }
		>({
			async queryFn({ email, password }) {
				try {
					const userCredential = await signUpWithEmailAndPassword(
						email,
						password
					)
					const serializableUser = transformFirebaseUser(userCredential.user)
					return { data: serializableUser }
				} catch (error: any) {
					return {
						error: error.message || 'Ошибка регистрации по почте и паролю.',
					}
				}
			},
		}),

		loginWithGoogle: builder.mutation<AuthUser, void>({
			async queryFn() {
				try {
					const userCredential = await signInWithGoogle()
					const serializableUser = transformFirebaseUser(userCredential.user)
					return { data: serializableUser }
				} catch (error: any) {
					return { error: error.message || 'Ошибка входа через Google.' }
				}
			},
		}),

		logout: builder.mutation<void, void>({
			async queryFn() {
				try {
					await signOut()
					return { data: undefined }
				} catch (error: any) {
					return { error: error.message || 'Ошибка выхода.' }
				}
			},
		}),

		resetPassword: builder.mutation<void, { email: string }>({
			async queryFn({ email }) {
				try {
					await sendPasswordResetEmail(email)
					return { data: undefined }
				} catch (error: any) {
					return { error: error.message || 'Ошибка сброса пароля.' }
				}
			},
		}),
	}),
})

export const {
	useLoginWithEmailMutation,
	useRegisterWithEmailMutation,
	useLoginWithGoogleMutation,
	useLogoutMutation,
	useResetPasswordMutation,
} = authApi
