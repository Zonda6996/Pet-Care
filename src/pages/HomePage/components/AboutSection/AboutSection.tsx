import cat from '@/shared/assets/images/cat.webp'
import catAndHorse from '@/shared/assets/images/catAndHorse.webp'
import { Button } from '@/shared/ui/Button'

export const AboutSection = () => {
	return (
		<section className='mt-20 py-10 mb-20 mx-20 px-4 bg-white'>
			<h2 className='font-extrabold text-3xl text-center'>
				Забота о животных — это забота о себе
			</h2>
			<div className='mt-12 flex items-center justify-evenly'>
				<div className='max-w-1/2'>
					<h3 className='text-2xl font-bold uppercase'>Наша история</h3>
					<p className='font-light text-balance'>
						Мы создали данный проект, потому что любим животных и собрали всю
						необходимую информацию в одном месте, мы помогаем людям понять своих
						питомцев и заботиться о них с увереностью.
					</p>
				</div>
				<img className='w-1/3 object-cover shadow-lg' src={cat} alt='Cat' />
			</div>
			<div className='mt-12 flex items-center justify-evenly'>
				<img
					className='max-h-[320px] w-[350px] object-cover shadow-lg'
					src={catAndHorse}
					alt='Cat and horse'
				/>
				<div className='max-w-1/2'>
					<h3 className='text-2xl font-bold uppercase'>
						Кому подойдет <span className='text-primary'>Pet Care</span>
					</h3>
					<h4 className='text-balance'>Наш сервис подойдет для тех, кто:</h4>
					<ul className='list-disc ml-5 font-light my-3'>
						<li>
							Только задумывается о питомце и хочет сделать осознанный выбор
						</li>
						<li>
							Уже ухаживает за домашним или сельским животным и ищет полезные
							советы
						</li>
						<li>
							Хочет быстро находить проверенные сервисы: от ветклиник до
							передержки
						</li>
						<li>Заботится о комфорте и благополучии своего друга</li>
					</ul>
					<p className='text-balance'>
						Здесь будет удобно и новичкам, и опытным владельцам — мы собрали всё
						в одном месте, чтобы забота стала проще.
					</p>
				</div>
			</div>
			<div className='mt-12 text-center flex flex-col items-center justify-center font-semibold gap-4'>
				<p className='max-w-1/2'>
					Мы верим, что забота о животных — это не обязанность, а удовольствие.
					<br />
					<span className='text-primary'>Pet Care</span> — это способ сделать
					заботу понятной, доступной и тёплой.
					<br /> Если вы так же любите своих питомцев, как и мы — вы точно по
					адресу.
				</p>
				<Button className='text-lg py-6'>Начать знакомство</Button>
			</div>
		</section>
	)
}
