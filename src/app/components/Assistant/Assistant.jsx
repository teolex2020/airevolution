'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { PromptStudy } from '../../../store/features/counterSlice.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	Scrollbar,
	A11y,
	Keyboard,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import 'swiper/css/keyboard'
import 'swiper/css/navigation'
import { ChevronLeftCircle , ChevronRightCircle    } from 'lucide-react'
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
		title: 'Згенерувати приклад завдання',
		picture: '/genlesson.jpg',
		descriptions:
			'Завдання може бути унікальний, відповідно згенеровано до вашого запиту',
		link: '/ai/chat',
		minipromt: 'gen',
	},
	{
		id: 3,
		title: 'Інтерактивні завдання',
		picture: '/interactive.jpg',
		descriptions:
			'Залучаючі ігрові елементи та завдання для підвищення мотивації та покращення засвоєння матеріалу',
		link: '/ai/chat',
		minipromt: 'interactive',
	},
	{
		id: 4,
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
		<div className='flex mt-5  w-full flex-col lg:items-center h-full '>
			<div className=' lg:text-3xl text-2xl font-semibold text-center pb-14 z-10'>
				Оберіть інструмент, що найкраще підходить Вам.{' '}
			</div>
			<div className=' ml-3 w-screen flex mx-auto container relative'>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={3}
					allowTouchMove={true}
					loop
					keyboard={true}
					breakpoints={{
						300: {
							slidesPerView: 1,
						},

						640: {
							slidesPerView: 3, // 3 слайда для великих пристроїв
						},
					}}
					navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
					coverflowEffect={{
						rotate: 30,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					modules={[
						Scrollbar,
						A11y,
						EffectCoverflow,
						Pagination,
						Navigation,
						Keyboard,
					]}
					className=' sm:w-[1000px]  flex justify-center items-center flex-col md:flex-row  arrow-lef'
				>
					{links.map((e) => (
						<SwiperSlide key={e.id}>
							<div
								className='text-center w-80 h-[400] cursor-pointer hover:text-white hover:shadow2 flex flex-col items-center border-4 rounded-3xl border-zinc-700/50 z-10 bg-blur '
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className='z-10 flex gap-20 sm:py-5 justify-center'>
				{' '}
				<button className='arrow-left z-10   '>
					<ChevronLeftCircle className='w-10 h-10 lg:w-10 lg:h-10 text-zinc-600' />
				</button>
				<button className='arrow-right z-10 '>
					<ChevronRightCircle className='w-10 h-10 lg:w-10 lg:h-10 text-zinc-600' />
				</button>
			</div>
		</div>
	)
}

export default Assistant
