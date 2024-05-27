import React, { useRef, useEffect } from 'react'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { MobileMenus, PopupMenu } from '../../../store/features/counterSlice'
import Button from './Button'

const Popup = () => {
	const dispatch = useDispatch()
	const popupmenu = useSelector((state) => state.counter.popupmenu)
	const mobileMenu = useSelector((state) => state.counter.mobileMenu)

	const popupRef = useRef()

	const closewindow = () => {
		dispatch(MobileMenus(mobileMenu))
		dispatch(PopupMenu(popupmenu))
	}
	const closepopup = () => {
		dispatch(PopupMenu(popupmenu))
	}
	
	useEffect(() => {
	

		const handleClickOutside = (event) => {
			if (
				popupRef.current &&
				!popupRef.current.contains(event.target) &&
				popupmenu
			) {
				closepopup()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [popupmenu, popupRef, closepopup, ])

	return (
		<div
			className={`fixed left-0 right-0 bottom-0 top-[66px] z-50 bg-[#0a0c19]/50 ${
				popupmenu
					? 'transition duration-700 ease-in-out opacity-100 translate-x-[0%]'
					: 'transition duration-700 ease-in-out opacity-0 translate-x-[100%]'
			}`}
		>
			<div
				className={`absolute md:hidden flex flex-col pl-10 right-0 w-72 shadow2 p-5 bg-[#0a0c19] text-xl gap-10 ${
					popupmenu
						? 'transition duration-700 ease-in-out translate-x-[0%]'
						: 'transition duration-700 ease-in-out translate-x-[100%]'
				}`}
				ref={popupRef}
			>
				<Link href='/yourbusiness' className='md:hidden flex'>
					<div className='flex items-center gap-4 justify-center'>
						For business
						<MoveRight />
					</div>
				</Link>
				<Link href='/about' className='md:hidden flex'>
					<div className='flex items-center gap-4'>
						About me
						<MoveRight />
					</div>
				</Link>
				<button
					className='flex items-center gap-4'
					onClick={() => closewindow()}
				>
					Contact me
					<MoveRight />
				</button>
				<div className='mt-24 w-full'>
					<Button />
				</div>
			</div>
		</div>
	)
}

export default Popup
