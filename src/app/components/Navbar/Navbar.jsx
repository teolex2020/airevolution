'use client'
import { Gentium_Book_Plus } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import { MobileMenus } from '../../../store/features/counterSlice'
import Href from '../ui/Href.jsx'
import MobileButton from './MobileButton.jsx'
import Logo from '../Logo/Logo'

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
			<div className='h-14 px-3 flex md:justify-center items-center mt-2 container mx-auto sticky  '>
				<div className='   '>
					<ul
						className={`flex  text-start gap-20  uppercase ${gentium.className}`}
					>
						<Link href='/yourbusiness' className='hidden  md:flex'>
							<li
								className={`${
									pathname === '/yourbusiness' &&
									'border-b-[3px] border-zinc-400   '
								} cursor-pointer w-fit px-5  text-center  duration-200  text-2xl h-12 flex items-center justify-center hover:text-[#469fc2] transition-all hover:shadow1 rounded-lg`}
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
								} cursor-pointer w-fit px-5  text-center  duration-300  text-2xl h-12 hidden  sm:flex items-center justify-center hover:text-[#469fc2]    transition-all hover:shadow1 rounded-lg`}
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
				<button
					className='rounded-full border-2 px-3 py-2 bg-blur border-[#12152e] hover:shadow1 duration-300 text-sm md:text-base absolute right-5 hidden md:block'
					onClick={() => closewindow()}
				>
					Contact me
				</button>
			</div>
			<Href />
		</div>
	)
}

export default Navbar
