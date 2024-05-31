"use client"
import React  from 'react'
import { Gentium_Book_Plus } from 'next/font/google'
import Image from 'next/image'
import {data} from "./data"


const gentium = Gentium_Book_Plus({
	weight: '700',
	subsets: ['latin'],
})

const About = () => {


  return (
		<div className='flex justify-center items-center mx-auto flex-col gap-5  px-5 container max-w-7xl '>
			<div className=' flex flex-col md:flex-row w-fit gap-3   justify-center relative items-center'>
				<a href='https://www.linkedin.com/in/alexander-tepliuk-448485161/'>
					{' '}
					<div className='flex-col w-64 h-80 p-4 rounded-lg  flex justify-start items-center animation cursor-pointer'>
						<div className='w-44 h-44 rounded-lg bg-blur animation relative'>
							<Image
								src='/alex.webp'
								fill
								alt='Picture of the author'
								sizes='(min-width: 808px) 50vw, 100vw'
								className='object-cover rounded-lg'
								priority
							/>
						</div>
						<div className='text-center pt-2'>
							<span className='text-lg'>Oleksandr Tepliuk</span> <br />
							<span className='text-[11px]'>
								Artificial Intelligence Ambassador, Artificial Intelligence
								Integration Consultant for Your Business
							</span>
						</div>
					</div>
				</a>
				<a href='https://www.linkedin.com/in/maximlevitskiy/'>
					<div className='flex-col w-64 h-80 p-4 rounded-lg  flex justify-start items-center animation cursor-pointer'>
						<div className='w-44 h-44 rounded-lg bg-blur animation relative'>
							<Image
								src='/max.webp'
								fill
								alt='Picture of the author'
								sizes='(min-width: 808px) 50vw, 100vw'
								className='object-cover rounded-lg'
								priority
							/>
						</div>
						<div className='text-center pt-2'>
							<span className='text-lg'>Maxim Levitskiy</span> <br />
							<span className='text-[11px]'>
								GenAI, Leadership, Clouds, Blockchain, Programming, Web Tree
							</span>
						</div>
					</div>
				</a>
				<a href='https://www.linkedin.com/in/alex-zaichenko/'>
					<div className='flex-col w-64 h-80 p-4 rounded-lg  flex justify-start items-center animation cursor-pointer'>
						<div className='w-44 h-44 rounded-lg bg-blur animation relative'>
							<Image
								src='/olex.webp'
								fill
								alt='Picture of the author'
								sizes='(min-width: 808px) 50vw, 100vw'
								className='object-cover rounded-lg'
								priority
							/>
						</div>
						<div className='text-center pt-2'>
							<span className='text-lg'>Alex Zaichenko</span> <br />
							<span className='text-[11px]'>
								Program, Manager, CSM ,AI enthusiast, AI Podcast, IT Volunteer
							</span>
						</div>
					</div>
				</a>
			</div>

			{data.map((e) => (
				<div key={e.id}>
					<h2
						className={`text-2xl text-center text-white font-semibold ${gentium.className}`}
					>
						{e.title}
					</h2>
					{e.descriptions}
				</div>
			))}
		</div>
	)
}

export default About