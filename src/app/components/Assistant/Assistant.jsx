'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { PromptStudy } from '../../../store/features/counterSlice.js'



const links = [
	{
		id: 1,
		title: 'Персоналізовані рекомендації',
		picture: '/individual.jpg',
		descriptions:
			'Адаптовані підходи до навчання, що враховують індивідуальні потреби дитини для оптимального розвитку навичок',
		link: '/ai/chat',
		minipromt: 'individual',
	},
	{
		id: 2,
		title: 'Інтерактивні завдання',
		picture: '/interactive.jpg',
		descriptions:
			'Залучаючі ігрові елементи та завдання для підвищення мотивації та покращення засвоєння матеріалу',
		link: '/ai/chat',
		minipromt: 'interactive',
	},
	{
		id: 3,
		title: 'Підтримка в реальному часі',
		picture: '/real.jpg',
		descriptions:
			'Негайна допомога та відповіді на питання від віртуального репетитора для підтримки навчального процесу',
		link: '/ai/chat',
		minipromt: 'real',
	},
]

const Assistant = () => {
	const dispatch = useDispatch()
	const router = useRouter()


	const assist = (e) => {
dispatch(PromptStudy(e.minipromt))
		router.push(`/assistant/${e.link}`)
	}

	return (
		<div className='flex justify-start h-fit  w-full flex-col items-center  py-10'>
			<div className=' lg:text-3xl text-2xl font-semibold text-center pb-14'>Оберіть інструмент, що найкраще підходить Вам. </div>
			<div className='flex flex-col md:flex-row gap-5 lg:gap-14 flex-wrap items-center justify-center'>
				{links.map((e) => (
					<div
						key={e.id}
						className='text-center w-80 h-[400px] cursor-pointer hover:text-white hover:shadow2 flex flex-col items-center border-2 rounded-3xl border-zinc-700/50  '
						onClick={() => assist(e)}
					>
						<p className='text-2xl py-5 '>{e.title}</p>
						<div className=' h-60 w-60 rounded-md  relative bg-[#292e35] '>
							{e.picture ? (
								<Image
									src={e.picture}
									alt='assist'
									fill
									priority
									sizes='(min-width: 500px) 50vw, 100vw'
									className='object-cover rounded-md'
								/>
							) : (
								<Image
									src='/not.png'
									alt='assist'
									fill
									priority
									sizes='(min-width: 500px) 50vw, 100vw'
									className='object-cover rounded-md'
								/>
							)}
						</div>
						<p className='text-sm p-5 '>{e.descriptions}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default Assistant
