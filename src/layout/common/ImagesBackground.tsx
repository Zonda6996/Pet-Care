import dogs from '@/shared/assets/images/mainDogs.webp'
import cats from '@/shared/assets/images/mainCats.webp'
import cows from '@/shared/assets/images/mainCows.webp'
import { ImageColumn } from './ImageColumn'

export const ImagesBackground = () => {
	return (
		<div className='flex w-full h-screen inset-0 overflow-hidden brightness-50 bg-linear-to-b from-white to-black absolute -z-1'>
			<ImageColumn src={dogs} alt='Dogs' />
			<ImageColumn className='brightness-80' src={cows} alt='Cows' />
			<ImageColumn src={cats} alt='Cats' />
		</div>
	)
}
