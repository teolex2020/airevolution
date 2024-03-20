import React, { useRef } from 'react'

import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { MobileMenus, PopupMenu } from '../../../store/features/counterSlice'

const Popup = () => {
	const dispatch = useDispatch()
	const popupmenu = useSelector((state) => state.counter.popupmenu)
	const mobileMenu = useSelector((state) => state.counter.mobileMenu)

	const popupRef = useRef()

	const closewindow = () => {
		dispatch(MobileMenus(mobileMenu))
		dispatch(PopupMenu(popupmenu))
	}

	return (
		<div
			className={`absolute md:hidden flex flex-col pl-10 right-0 w-72  top-16  shadow2  rounded-md p-5 z-50 bg-blur text-xl gap-5 ${
				popupmenu
					? 'transition duration-700 ease-in-out translate-x-[0%] '
					: 'transition duration-700 ease-in-out translate-x-[100%]'
			}`}
			ref={popupRef}
		>
			<Link href='/yourbusiness' className='md:hidden  flex'>
				<div
					className={` flex items-center gap-4 justify-center
						`}
				>
					For business
					<MoveRight />
				</div>
			</Link>
			<Link href='/about' className='md:hidden  flex'>
				<div
					className={` flex items-center gap-4 
						`}
				>
					About me
					<MoveRight />
				</div>
			</Link>
			<button
				className='flex items-center gap-4 '
				onClick={() => closewindow()}
			>
				Contact me
				<MoveRight />
			</button>
		</div>
	)
}

export default Popup