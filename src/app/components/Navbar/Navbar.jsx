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



const Navbar = () => {
	const dispatch = useDispatch()

	const mobileMenu = useSelector((state) => state.counter.mobileMenu)

	const closewindow = () => {
		dispatch(MobileMenus(mobileMenu))
	}

	const pathname = usePathname()

	return (
		<div className=' z-10 bg-blur  relative '>
			<div className='h-14 px-3 flex md:justify-around items-center mt-2 container mx-auto sticky  '>
				<div className='w-48 hidden md:block'></div>
				<div className='   '>
					<ul
						className={`flex  text-start gap-20  uppercase ${gentium.className}`}
					>
						<Link href='/yourbusiness' className='hidden  md:flex'>
							<li
								className={`${
									pathname === '/yourbusiness' &&
									'border-b-[3px] border-zinc-400   '
								} cursor-pointer w-fit px-5  text-center  duration-200  text-xl h-12 flex items-center justify-center hover:text-[#469fc2] transition-all hover:shadow1 rounded-full`}
							>
								for business
							</li>
						</Link>
						<Link
							href='/'
							className='text-bold text-3xl hover:scale-x-[-1] duration-500'
						>
							<Logo />
						</Link>
						<Link href='/about' className='hidden  md:flex'>
							<li
								className={`${
									pathname === '/about' && 'border-b-[3px] border-zinc-400   '
								} cursor-pointer w-fit px-5  text-center  duration-300  text-xl h-12 hidden  sm:flex items-center justify-center hover:text-[#469fc2]    transition-all hover:shadow1 rounded-full`}
							>
								about me
							</li>
						</Link>
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

					<button
						className='rounded-full border-2 px-3 py-2 bg-blur border-[#2a2e57] hover:shadow1 duration-300 text-sm   hidden md:block'
						onClick={() => closewindow()}
					>
						Contact me
					</button>
				</div>
			</div>
			<Href />
		</div>
	)
}

export default Navbar
