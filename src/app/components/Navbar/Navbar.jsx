'use client'
import Link from 'next/link'
import { useState } from 'react'
import Menumobile from '../Menumobile/Menumobile.jsx'
import Signin from './Signin.jsx'

import Logo from '../Logo/Logo'

const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},
	// {
	// 	id: 2,
	// 	title: 'About',
	// 	url: '/about',
	// },
	// {
	// 	id: 3,
	// 	title: 'Speakers',
	// 	url: '/speakers',
	// },
	{
		id: 3,
		title: 'AI Assistant',
		url: '/assistant',
	},
	{
		id: 4,
		title: 'Prompt',
		url: '/prompt',
	},
	// {
	// 	id: 5,
	// 	title: 'Efficient Day',
	// 	url: '/day',
	// },
	// {
	// 	id: 4,
	// 	title: 'Schedule',
	// 	url: '/schedule',
	// },
	// {
	// 	id: 5,
	// 	title: 'Blog',
	// 	url: '/blog',
	// },

	{
		id: 6,
		title: 'Contact',
		url: '/contact',
	},
]



const Navbar = () => {


	const [active, setActive] = useState()
	const [openmenu, setOpenmenu] = useState(false)

	const activeclass = (e) => {
		setActive(e)
	}
	const activesponsors = () => {
		setActive(0)
	}

	const openmenumobil = () => {
		setOpenmenu(true)
	}





	return (
		<div className='h-20 flex justify-between items-center my-2 '>
			{openmenu && <Menumobile setOpenmenu={setOpenmenu}  />}
			<Link href='/' className='text-bold text-3xl'>
				<Logo />
			</Link>

			<div className='w-10 h-10 md:hidden' onClick={() => openmenumobil()}>
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
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					></path>
				</svg>
			</div>
			<div className='hidden md:flex items-center gap-5'>
				{links.map((link) => (
					<Link
						key={link.id}
						href={link.url}
						className='flex items-center gap-4'
					>
						<p
							className={`${
								active === link.id && ' text-white'
							} hover:text-white hover:font-semibold`}
							onClick={() => activeclass(link.id)}
						>
							{link.title}
						</p>
					</Link>
				))}
				<Link href={`/sponsors`}>
					{' '}
					<button
						className='bg-[rgb(255,144,0)] text-black rounded-md p-1 font-semibold hover:bg-[rgb(252,158,35)] hover:font-bold'
						onClick={activesponsors}
					>
						Sponsors
					</button>
				</Link>
				<div>
								<Signin />
				</div>
				{/* <div className='w-6 h-6 relative' onClick={() => lang()}>
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
				</div> */}
			</div>
		</div>
	)
}

export default Navbar
