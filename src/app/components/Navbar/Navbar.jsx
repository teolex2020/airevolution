'use client'
import { Gentium_Book_Plus } from 'next/font/google'
import Link from 'next/link'

import Menumobile from '../Menumobile/Menumobile.jsx'
import Signin from './Signin.jsx'
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { MobileMenus } from '../../../store/features/counterSlice'
import Href from '../ui/Href.jsx'
const gentium = Gentium_Book_Plus({
	weight: '400',
	subsets: ['latin'],
})

import Logo from '../Logo/Logo'

const links = [
	{
		id: 1,
		title: 'інструменти',
		url: '/assistant',
	},
	{
		id: 3,
		title: 'Про себе',
		url: '/about',
	},
	{
		id: 2,
		title: 'На розвиток',
		url: '/sponsors',
	},

	{
		id: 4,
		title: 'Контакти',
		url: '/contact',
	},
]

const Navbar = () => {
	const dispatch = useDispatch()

	const mobileMenu = useSelector((state) => state.counter.mobileMenu)

	const closewindow = () => {
		dispatch(MobileMenus(mobileMenu))
	}

	const pathname = usePathname()

	return (
		<div>
			<div className='h-16 px-3 relative flex justify-between items-center my-2 container mx-auto '>
				<Menumobile />

				<div className='flex lg:justify-start justify-between items-center space-x-10 w-full '>
					<div>
						<Link href='/' className='text-bold text-3xl'>
							<Logo />
						</Link>
					</div>
					<div className='w-10 h-10 md:hidden' onClick={() => closewindow()}>
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
					<div className='hidden border-2 rounded-3xl border-zinc-700/50 px-5  text-center py-2 lg:flex justify-center '>
						<ul className={`flex gap-5   ${gentium.className} uppercase`}>
							{links.map((item) => (
								<Link key={item.id} href={item.url}>
									<li
										className={`${
											pathname.includes(item.url)
												? 'underline underline-offset-[14px]'
												: ''
										} cursor-pointer w-40  text-center  duration-300 hover:underline underline-offset-[14px] text-xl `}
									>
										{item.title}
									</li>
								</Link>
							))}
						</ul>
					</div>
				</div>

				<div className='hidden lg:block'>
					<Signin />
				</div>
			</div>
			<Href />
		</div>
	)
}

export default Navbar
