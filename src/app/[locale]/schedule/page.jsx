import React from 'react'
import Image from 'next/image'
import SheduleComponent from '@/app/[locale]/components/Shedule/SheduleComponent'
import Links from '../components/Link/Link.jsx'

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
		title:
			'Artificial intelligence for drones in security applications, How Artificial intelligence can enable operations in GPS-denied environments, Consideration of methods of using AI to detect and neutralize unauthorized drones, Assessment of ethical and technological aspects of using AI to control security drones ',
		name: 'Valerii Iakovenko',
	},
	{
		id: 4,
		time: '16.00',
		title: 'AI will not take your job, it will be taken by people using AI',
		name: 'Maxim Levitskiy',
	},
	{
		id: 5,
		time: '16.00',
		title: 'Artificial intelligence (AI) in e-commerce',
		name: 'Nataliya Stelmakh',
	},
	{
		id: 6,
		time: '16.00',
		title:
			'Social aspects of the application of artificial intelligence technologies',
		name: 'Oksana Krasovskaya',
	},
]


const page = () => {
  return (
		<div>
			<div className=' w-full h-[600px] relative flex justify-center my-10'>
				<Image
					src='/phone.jpg'
					alt=''
					fill
					sizes='(min-width: 500px) 50vw, 100vw'
					priority
					className='object-cover  grayscale'
				/>
				
				<div className='absolute z-10  left-0 bottom-0'>
					<div className='text-xl md:text-3xl  relative  font-bold bg-[rgba(5,5,5,0.6)] p-2 rounded-r-lg md:w-[600px] text-blue-400'>
						<span className='text-base md:text-xl font-bold '>
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
				<p className='w-full text-center text-xl md:text-3xl font-semibold text-white'>
					Schedule:
				</p>
				{shed.map((e) => {
					return (
						<>
							<SheduleComponent
								key={e.id}
								time={e.time}
								title={e.title}
								name={e.name}
							/>
							<hr className='opacity-20 py-5'/>
						</>
					)
				})}
			</div>
		<Links/>
		</div>
	)
}

export default page