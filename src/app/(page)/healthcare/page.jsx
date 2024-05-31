'use client'

import Image from 'next/image'
import { Gentium_Book_Plus } from 'next/font/google'
import { test } from './data'
import Link from 'next/link'


const gentium = Gentium_Book_Plus({
	weight: '700',
	subsets: ['latin'],
})

const YourBusiness = () => {


	return (
		<div
			className='flex mx-auto flex-col gap-5 mt-5 px-5 container max-w-7xl 
'
		>
			<div className='w-full flex  items-center flex-col bg-blur gap-5 py-5 rounded-lg'>
				<h1
					className={`text-2xl md:text-4xl text-center text-white font-semibold ${gentium.className}`}
				>
					Transform Your Healthcare with Generative AI
				</h1>
			</div>
			<div className='px-20 flex  items-center flex-col gap-5'>
				{test.map((e) => (
					<div
						key={e.id}
						className=' p-10 rounded-lg flex flex-col md:flex-row bg-blur hover:shadow1 duration-500 md:odd:flex-row-reverse text-center md:text-start'
					>
						<div className='flex-1 flex w-70 h-auto justify-center relative '>
							<div className=' p-4 rounded-lg bg-blur flex justify-center items-center animation'>
								<div className='w-64  h-64  rounded-lg bg-blur animation relative'>
									<Image
										src={e.image}
										fill
										alt='Picture of the author'
										sizes='(min-width: 808px) 50vw, 100vw'
										className='object-contain rounded-lg'
										priority
									/>
								</div>
							</div>
						</div>

						<div className='flex-1 flex flex-col md:items-start  text-[18px]  gap-5 pt-2'>
							<h2
								className={`text-2xl md:text-3xl font-semibold ${gentium.className}`}
							>
								{e.title}
							</h2>
							<p className='text-sm text-justify md:text-lg'>{e.description}</p>
							<Link href={`/healthcare/${e.slug}`}>
								<span className='text-blue-500 hover:underline'>
									Learn More
								</span>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default YourBusiness
