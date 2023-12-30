'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Signin from '../Navbar/Signin'
import { useSelector, useDispatch } from 'react-redux'
import { MobileMenus } from '../../../store/features/counterSlice'
import Logo from '../Logo/Logo'

const links = [
	{
		id: 1,
		title: 'інструменти',
		url: '/assistant',
	},
	{
		id: 2,
		title: 'На розвиток',
		url: '/sponsors',
	},
	// {
	// 	id: 3,
	// 	title: 'Prompt',
	// 	url: '/prompt',
	// },

	{
		id: 4,
		title: 'Контакти',
		url: '/contact',
	},
]

const Menumobile = () => {
	const dispatch = useDispatch()

	const mobileMenu = useSelector((state) => state.counter.mobileMenu)



	const closewindow = () => {
		dispatch(MobileMenus(mobileMenu))
	}

	return (
		<div
			className={`fixed bg-[#13181d] top-0 bottom-0 left-0 right-0  z-10 ${
				mobileMenu
					? 'transition duration-700 ease-in-out translate-x-[100%] '
					: 'transition duration-700 ease-in-out translate-x-[0%]'
			}`}
		>
			<div className='absolute left-5'><Logo/></div>
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
				<div className='lg:hidden  flex justify-center'>
					<ul
						className={` px-10 py-2 flex flex-col items-center text-center gap-8  uppercase`}
					>
						{links.map((item) => (
							<Link key={item.id} href={item.url}>
								<li
									onClick={() => closewindow()}
									className={`border-2 rounded-3xl border-zinc-700/50 w-full h-12 flex  bg-blur cursor-pointer relative  justify-center items-center px-10 min-w-[300px]`}
								>
									{item.title}
								</li>
							</Link>
						))}
						<div className='z-10 '>
							<Signin />
						</div>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menumobile
