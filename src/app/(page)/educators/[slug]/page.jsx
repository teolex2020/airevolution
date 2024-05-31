"use client"
import { useRouter, usePathname } from 'next/navigation'
import { test } from '../data.js'
import Image from 'next/image'
import { Gentium_Book_Plus } from 'next/font/google'
import { ArrowLeft } from 'lucide-react'

const gentium = Gentium_Book_Plus({
	weight: '700',
	subsets: ['latin'],
})

const Detail = () => {
	const router = useRouter()
	const path = usePathname()
	const slug = path.split('/').pop()

	const detail = test?.find((item) => item.slug === slug)

	const back = ()=> {router.back()}

	


	if (!detail) {
		return <div className='flex-1 '>Loading...</div>
	}

	return (
		<div className='flex flex-1 mx-auto flex-col gap-5 mt-3 md:mt-10 px-5 container max-w-7xl justify-center items-center'>
			<div className='w-full flex flex-col md:flex-row items-center justify-center px-5 md:bg-blur gap-3 md:gap-10  rounded-full'>
				<div className='w-20 h-20  relative'>
					<Image
						src={detail.image}
						fill
						alt='AI detail image'
						sizes='(min-width: 808px) 50vw, 100vw'
						className='object-contain rounded-full'
						priority
					/>
				</div>

				<h1
					className={`text-2xl md:text-4xl text-center text-white font-semibold ${gentium.className}`}
				>
					{detail.title}
				</h1>
			</div>

			<div className='flex-1 flex flex-col items-center justify-center  gap-5 md:pt-10 max-w-3xl'>
				<p className='text-sm text-justify md:text-lg'>
					{detail.moredescriptions}
				</p>
			</div>
			<button className='w-fit flex gap-3 bg-blur py-1 px-2 rounded-lg hover:scale-105 my-4' onClick={()=>back()}>
				<ArrowLeft />
				Back
			</button>
		</div>
	)
}

export default Detail
