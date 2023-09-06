import React from 'react'
import Image from 'next/image'
import SheduleComponent from '@/components/Shedule/SheduleComponent'

const shed = [
	{
		id: 1,
		time: '16.00',
		title: 'Generative Artificial Intelligence: Opportunities for Education',
		name: 'Andrii Ozarchuk',
	},
	{
		id: 2,
		time: '17.00',
		title:
			'Philosophical and ethical aspects of the use of artificial intelligence',
		name: 'Yeva Antonenko',
	},
	{
		id: 3,
		time: '16.00',
		title: 'Генеративний штучний інтелект: можливості для освіти',
		name: 'Andrii Ozarchuk',
	},
	{
		id: 4,
		time: '16.00',
		title: 'Генеративний штучний інтелект: можливості для освіти',
		name: 'Andrii Ozarchuk',
	},
	{
		id: 4,
		time: '16.00',
		title: 'Генеративний штучний інтелект: можливості для освіти',
		name: 'Andrii Ozarchuk',
	},
]


const page = () => {
  return (
		<div>
			{' '}
			<div className=' w-full h-[600px] relative flex justify-center '>
				<Image
					src='/phone.jpg'
					alt=''
					fill
					sizes='(min-width: 500px) 50vw, 100vw'
					priority
					className='object-cover  grayscale'
				/>
				<div className='absolute z-10 text-white left-0 bottom-0'>
					<div className='text-xl md:text-3xl text-black relative  font-bold bg-[rgb(255,144,0)] p-2 rounded-r-lg md:w-[600px]'>
						<span className='text-base md:text-xl font-bold'>
							Online conference:
						</span>
						<br /> Artificial Intelligence: Challenges and Opportunities for
						Ukraine.
						<br />
						<br />
						<span className='text-base md:text-2xl '>
							September 14, 2023 at 4:00 PM
						</span>
					</div>
				</div>
			</div>
			<div className='mt-5'>
				<p className='w-full text-center text-xl md:text-3xl font-semibold'>
					Schedule:
				</p>
				{shed.map((e) => {
					return (
						<SheduleComponent
							key={e.id}
							time={e.time}
							title={e.title}
							name={e.name}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default page