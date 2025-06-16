import {
	AmbulanceIcon,
	HeartPulseIcon,
	HelpingHandIcon,
	LucideCat,
} from 'lucide-react'
import { ServicesCard } from './ServicesCard'

export const ServicesCards = () => {
	return (
		<>
			<ServicesCard>
				<HeartPulseIcon className='h-[70px] stroke-1 text-secondary flex w-full' />
				<p className='text-xl font-extrabold'>Мониторинг здоровья животного</p>
				<p>
					Меняйте статус	 здоровья животного в зависимости от его состояния и
					получайте советы по уходу за ним
				</p>
			</ServicesCard>
			<ServicesCard>
				<AmbulanceIcon className='w-[70px] h-[70px] stroke-1 text-secondary' />
				<p className='text-xl font-extrabold'>
					Быстрый просмотр ветеринарных клиник
				</p>

				<p>
					Меняйте статус здоровья животного в зависимости от его состояния и
					получайте советы по уходу за ним
				</p>
			</ServicesCard>
			<ServicesCard>
				<HelpingHandIcon className='w-[70px] h-[70px] stroke-1 text-secondary' />
				<p className='text-xl font-extrabold'>Множество услуг на ваш выбор</p>
				<p>
					Меняйте статус здоровья животного в зависимости от его состояния и
					получайте советы по уходу за ним
				</p>
			</ServicesCard>
			<ServicesCard>
				<LucideCat className='w-[70px] h-[70px] stroke-1 text-secondary' />
				<p className='text-xl font-extrabold'>Личный профиль животного</p>
				<p>
					Меняйте статус здоровья животного в зависимости от его состояния и
					получайте советы по уходу за ним
				</p>
			</ServicesCard>
		</>
	)
}
