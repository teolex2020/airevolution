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
		<div className='flex mx-auto flex-col gap-5  px-5 container max-w-7xl '>
			<div className=''>
				<Image
					src='/aboutme.webp'
					width={1000}
					height={500}
					alt='Picture of the author'
					className='object-contain rounded-lg'
					priority
				/>
			</div>
			{data.map((e) => (
				<div key={e.id}>
					<h2
						className={`text-3xl text-center text-white font-semibold ${gentium.className}`}
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