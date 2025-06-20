import { FirebaseError } from 'firebase/app'

export const handleAuthError = (error: unknown): Error => {
	let errorMessage = 'Произошла неизвестная ошибка.'

	if (error instanceof FirebaseError) {
		console.error(`Firebase Auth Error (${error.code}): (${error.message})`)
		switch (error.code) {
			case 'auth/wrong-password':
			case 'auth/invalid-credential':
				errorMessage = 'Неверные данные. Пожалуйста, проверьте e-mail и пароль.'
				break
			case 'auth/user-not-found':
				errorMessage = 'Пользователь с таким e-mail не найден.'
				break
			case 'auth/invalid-email':
				errorMessage = 'Неккоректный форма e-mail.'
				break
			case 'auth/email-already-in-use':
				errorMessage =
					'Этот email уже используется. Пожалуйста, используйте другой или войдите.'
				break
			case 'auth/weak-password':
				errorMessage =
					'Пароль слишком слабый. Он должен быть не менее 6 символов.'
				break
			case 'auth/popup-closed-by-user':
			case 'auth/cancelled-popup-request':
				errorMessage = 'Вход был отменен пользователем.'
				break
			case 'auth/network-request-failed':
				errorMessage = 'Ошибка сети. Проверьте ваше интернет-соединение.'
				break
			case 'auth/too-many-requests':
				errorMessage = 'Слишком много попыток. Повторите позже'
				break
			case 'auth/requires-recent-login':
				errorMessage = 'Для этого действия требуется повторный вход.'
				break
			case 'auth/invalid-action-code':
				errorMessage = 'Код для сброса или подтверждения пароля недействителен.'
				break
			case 'auth/expired-action-code':
				errorMessage =
					'Код для сброса или подтверждения пароля истек. Пожалуйста, запросите новый.'
				break
			default:
				errorMessage = error.message
		}
	} else if (error instanceof Error) {
		console.error(`Standart Error: ${error.message}`)
		errorMessage = error.message
	} else {
		console.error('An unexpected error occurred:', error)
	}

	return new Error(errorMessage)
}
