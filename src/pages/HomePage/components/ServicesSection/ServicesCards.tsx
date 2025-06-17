import {
	AmbulanceIcon,
	HeartPulseIcon,
	HelpingHandIcon,
	LucideCat,
} from 'lucide-react'

import WaveShape1Svg from '@/shared/assets/svg/wave-shape-1.svg?react'
import WaveShape2Svg from '@/shared/assets/svg/wave-shape-2.svg?react'
import WaveShape3Svg from '@/shared/assets/svg/wave-shape-3.svg?react'
import WaveShape4Svg from '@/shared/assets/svg/wave-shape-4.svg?react'

import { ServicesCard } from './ServicesCard'

export const ServicesCards = () => {
	return (
		<>
			<div className='flex gap-10 flex-wrap px-3 justify-center'>
				<ServicesCard
					IconComponent={HeartPulseIcon}
					className='hover:shadow-red-500 hover:shadow-2xl/60'
					iconClassName='text-red-500'
					title='Мониторинг'
					description='Меняйте статуc здоровья животного в зависимости от его состояния и получайте советы по уходу за ним'
					WaveComponent={WaveShape1Svg}
				/>
				<ServicesCard
					IconComponent={AmbulanceIcon}
					iconClassName='text-cyan-500'
					className='hover:shadow-cyan-500 hover:shadow-2xl/60'
					title='Ветеренария'
					description='Найдите ближайшую ветеринарию и получите поддержку прямо сейчас'
					WaveComponent={WaveShape2Svg}
				/>
				<ServicesCard
					IconComponent={HelpingHandIcon}
					iconClassName='text-primary'
					className='hover:shadow-primary hover:shadow-2xl/60'
					title='Сервис'
					description='Множество услуг на ваш выбор, начиная от передержки, правильного питания до круглосуточной поддержки '
					WaveComponent={WaveShape3Svg}
				/>
				<ServicesCard
					IconComponent={LucideCat}
					iconClassName='text-orange-600'
					className='hover:shadow-orange-600 hover:shadow-2xl/60'
					title='Профиль животного'
					description='Создайте профиль для вашего животного, отслеживайте здоровье, получайте советы и многое другое!'
					WaveComponent={WaveShape4Svg}
				/>
			</div>
		</>
	)
}
