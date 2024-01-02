import Image from 'next/image'
import teacher from '../../public/teacher.jpg'
import Button from '../app/components/Button/Button'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'


export default function Home() {

	return (
		<div className='flex flex-wrap flex-col-reverse lg:flex-row  items-center gap-10 py-5 '>
			<div className='flex flex-col flex-1 gap-5 '>
				<h1 className=' font-bold text-2xl md:text-[40px]  leading-[1] text-center lg:text-start'>
					Ваш особистий ШІ помічник для батьків школярів
				</h1>
				<p className=' text-center lg:text-start '>
					Ласкаво просимо! Ваш персоналізований помічник у світі освіти, який
					використовує передові технології штучного інтелекту, щоб забезпечити
					вашій дитині найкращий досвід навчання. З нашим помічником, ваша
					дитина отримає:
					<br /> - Персоналізовані рекомендації, які відповідають
					індивідуальному стилю навчання та рівню знань.
					<br /> - Інтерактивні завдання та ігри, що роблять навчання
					захоплюючим та ефективним.
					<br /> - Підтримку в реальному часі від віртуального репетитора,
					готового відповісти на будь-яке питання та допомогти з домашнім
					завданням. Приєднуйтесь до нас сьогодні та дайте вашій дитині
					перевагу, яка допоможе їй досягти нових вершин у навчанні!
				</p>
				<div className='flex justify-center lg:justify-start z-10'>
					<Button
						icon={<ArrowLongRightIcon className='h-6 w-6 ' />}
						url='/assistant'
						text='Спробувати'
						classes={' hover:bg-[#13181a] text-xl'}
					></Button>
				</div>
			</div>
			<div className='flex  lg:flex-1 rounded-xl justify-center w-full h-[250px] md:h-[500px] relative  border-4 border-zinc-800'>
				<Image
					src={teacher}
					alt=''
					fill
					priority
					className=' object-cover rounded-lg'
					sizes='(min-width: 500px) 50vw, 100vw'
				/>
			</div>
		</div>
	)
}
