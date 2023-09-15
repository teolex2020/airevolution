"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},
	{
		id: 2,
		title: 'About',
		url: '/about',
	},
	{
		id: 3,
		title: 'Speakers',
		url: '/speakers',
	},
	{
		id: 4,
		title: 'Schedule',
		url: '/schedule',
	},

	{
		id: 5,
		title: 'Blog',
		url: '/blog',
	},

	{
		id: 6,
		title: 'Contact',
		url: '/contact',
	},
]

const Menumobile = ({ setOpenmenu }) => {
	const [active, setActive] = useState()
		const [language, setLanguage] = useState(true)

	const activeclass = (e) => {
		setActive(e)
    setOpenmenu(false)
	}
	const activesponsors = () => {
		setActive(0)
     setOpenmenu(false)
	}
  
  	const closewindow = () => {
		
			setOpenmenu(false)
		}

			const lang = () => {
				setLanguage(!language)
			}

	return (
		<div className='fixed bg-[#111111] top-0 bottom-0  right-0 w-72 z-10'>
			<div className='w-full flex justify-end p-5'>
				<div className='w-8 h-8  ' onClick={() => closewindow()}>
					<svg
						fill='none'
						stroke='currentColor'
						strokeWidth='1.5'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18L18 6M6 6l12 12'
						></path>
					</svg>
				</div>
			</div>

			<div className='flex flex-col items-center gap-5 pt-10'>
				{links.map((link) => (
					<Link
						key={link.id}
						href={`/en/${link.url}`}
						className='flex items-center gap-4'
					>
						<p
							className={`${
								active === link.id && ' text-white '
							} hover:text-white hover:font-semibold`}
							onClick={() => activeclass(link.id)}
						>
							{link.title}
						</p>
					</Link>
				))}
				<Link href={`/en/sponsors`}>
					{' '}
					<button
						className='bg-[rgb(255,144,0)] text-black rounded-md p-1 font-semibold hover:bg-[rgb(252,158,35)] hover:font-bold'
						onClick={activesponsors}
					>
						Sponsors
					</button>
				</Link>
				{/* <div className='flex space-x-3 cursor-pointer' onClick={() => lang()}>
					<div>Language</div>

					<div className='w-6 h-6 relative'>
						{language ? (
							<Image
								src='/usa.png'
								alt=''
								fill
								sizes='(min-width: 50px) 50vw, 100vw'
								priority
								className='object-cover '
							/>
						) : (
							<Image
								src='/ukraine.png'
								alt=''
								fill
								sizes='(min-width: 50px) 50vw, 100vw'
								priority
								className='object-cover '
							/>
						)}
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default Menumobile