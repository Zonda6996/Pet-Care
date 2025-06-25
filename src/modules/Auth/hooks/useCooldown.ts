import { useEffect, useState } from 'react'

export const useCooldown = (initialSeconds: number = 60) => {
	const [cooldown, setCooldown] = useState(0)

	const start = () => {
		if (cooldown === 0) setCooldown(initialSeconds)
	}

	useEffect(() => {
		if (cooldown === 0) return

		const timer = setInterval(() => {
			setCooldown(prev => {
				if (prev <= 1) {
					clearInterval(timer)
					return 0
				}
				return prev - 1
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [cooldown])

	return { cooldown, start, isActive: cooldown > 0 }
}
