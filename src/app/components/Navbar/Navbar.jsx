'use client'
import { Gentium_Book_Plus } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { MobileMenus } from '../../../store/features/counterSlice'
import Href from '../ui/Href.jsx'
import MobileButton from './MobileButton.jsx'
import Logo from '../Logo/Logo'
import Button from "./Button"



const gentium = Gentium_Book_Plus({
	weight: '400',
	subsets: ['latin'],
})

const menu = [
	{
		id: 1,
		title: 'Business',
		href: 'business',
	},
	
	{
		id: 3,
		title: 'Educators',
		href: 'educators',
	},
	{
		id: 4,
		title: 'Politicians',
		href: 'politicians',
	},
	{
		id: 5,
		title: 'Healthcare',
		href: 'healthcare',
	},
	{
		id: 6,
		title: 'About us',
		href: 'about',
	},
]



const Navbar = () => {
	const dispatch = useDispatch()

	const mobileMenu = useSelector((state) => state.counter.mobileMenu)

	const closewindow = () => {
		dispatch(MobileMenus(mobileMenu))
	}

	const pathname = usePathname()
	console.log(pathname)

	return (
		<div className=' z-10 bg-blur  relative '>
			<div className='h-14 px-3 flex md:justify-around items-center mt-2 container mx-auto sticky  '>
				<div className='flex items-center gap-5  '>
					<Link
						href='/'
						className='text-bold text-3xl hover:scale-x-[-1] duration-500'
					>
						<Logo />
					</Link>

					<ul className={`flex  text-start gap-6 ${gentium.className}`}>
						{menu.map((e) => (
							<Link key={e.id} href={`/${e.href}`} className='hidden  md:flex'>
								<li
									className={`${
										pathname.includes(e?.href) && '  text-[#469fc2]  shadow1'
									} cursor-pointer w-fit px-3  text-center  duration-200  text-xl h-10 flex items-center justify-center hover:text-[#469fc2] transition-all hover:shadow1 rounded-full`}
								>
									{e.title}
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div className='absolute right-5 md:hidden block'>
					{' '}
					<MobileButton />
				</div>
				<div className='flex gap-3 '>
					<div className='hidden md:block'>
						{' '}
						<Button />
					</div>
				</div>
			</div>
			<Href />
		</div>
	)
}

export default Navbar
