'use client'
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MobileMenus } from '../../../store/features/counterSlice'

const Menumobile = () => {
	const dispatch = useDispatch()

	const mobileMenu = useSelector((state) => state.counter.mobileMenu)

	const closewindow = () => {
		dispatch(MobileMenus(mobileMenu))
	}

	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'airevolution',
				process.env.NEXT_PUBLIC_TEMPLATE,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS
			)
			.then(
				() => {
					toast.success('Message successfully sent!', {
						position: 'bottom-center',
						autoClose: 3500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					})
					const timeout = setTimeout(() => {
						window.location.reload(false)
					}, 3900)

					return () => clearTimeout(timeout)
				},
				() => {
					toast.error('Failed to send the message, please try again', {
						position: 'bottom-center',
						autoClose: 3500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: 'dark',
					})
				}
			)
	}

	return (
		<div
			className={`fixed border-l-2 border-zinc-600 bg-[#1e1f24] top-0 bottom-0  right-0 md:w-96 z-50 ${
				mobileMenu
					? 'transition duration-700 ease-in-out translate-x-[100%] '
					: 'transition duration-700 ease-in-out translate-x-[0%]'
			}`}
		>
			<div className='absolute left-5 w-14 h-14'>
				{' '}
				<Image
					src='/log.png'
					fill
					alt='logo'
					priority
					sizes='(min-width: 500px) 50vw, 100vw'
				/>
			</div>
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
			<ToastContainer />
			<div className='flex flex-col items-center gap-5 pt-5'>
				<div className='w-full px-5 text-center'>
					<p className='text-2xl'>Send a request for a consultation</p>
				</div>
				<div>
					<div className='flex flex-col lg:flex-row lg:items-center gap-10'>
						<form
							className='flex-1 flex flex-col gap-5'
							ref={form}
							onSubmit={sendEmail}
						>
							<div className='relative group '>
								<p className='absolute -top-3 left-4 text-zinc-400   w-16 flex justify-center text-[14px]  bg-[#1e1f24] group-hover:text-[#469fc2]'>
									Name*
								</p>
								<input
									type='text'
									name='name'
									required
									minLength='3'
									maxLength='50'
									className='bg-transparent border border-zinc-500 rounded-sm px-3 outline-none  text-zinc-200 h-12 w-full text-sm  group-hover:border-[#469fc2]  decoration-transparent cursor-pointer'
								/>
							</div>
							<div className='relative group '>
								<p className='absolute -top-3 left-4 text-zinc-400   w-16 flex justify-center text-[14px]  bg-[#1e1f24] group-hover:text-[#469fc2]'>
									Email*
								</p>
								<input
									required
									type='email'
									name='email'
									minLength='3'
									maxLength='50'
									className='bg-[#1e1f24] !important border border-zinc-500 rounded-sm px-3 outline-none  text-zinc-200 h-12 w-full text-sm  group-hover:border-[#469fc2]  decoration-transparent cursor-pointer'
								/>
							</div>
							<div className='relative group '>
								<p className='absolute -top-3 left-4 text-zinc-400  px-2 w-fit flex justify-center text-[14px]  bg-[#1e1f24] group-hover:text-[#469fc2]'>
									Message
								</p>
								<textarea
									className='w-full p-5 text-sm text-white  border border-zinc-600 outline-none bg-transparent rounded-md group-hover:border-[#469fc2] cursor-pointer'
									cols='30'
									rows='5'
									name='message'
									required
									minLength='3'
									maxLength='1000'
								></textarea>
							</div>

							<button
								type='submit'
								className={`border-2 rounded-xl border-zinc-600 px-10 py-2 flex     uppercase duration-300 z-10 justify-center hover:shadow1`}
							>
								{' '}
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-5  justify-center py-10'>
				<a href='https://www.facebook.com/O.Teplyk' className='flex px-5 gap-5'>
					<div className='flex relative w-5 h-5 sm:w-6 sm:h-6 img'>
						<Image
							src='/facebook.png'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 20px) 50vw, 100vw'
						/>
					</div>
					<p> my Facebook</p>
				</a>

				<a
					href='https://www.linkedin.com/in/alexander-tepliuk-448485161/'
					className='flex px-5 gap-5'
				>
					<div className='relative  w-5 h-5 sm:w-6 sm:h-6 img'>
						<Image
							src='/linkedin.png'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 20px) 50vw, 100vw'
						/>
					</div>
					<p> my Linkedin</p>
				</a>
				<a
					href='https://www.youtube.com/channel/UCyNQ2sIQjmosBFfa-tbT42g'
					className='flex px-5 gap-5'
				>
					<div className=' relative  w-5 h-5 sm:w-6 sm:h-6 img'>
						<Image
							src='/youtube.png'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 500px) 50vw, 100vw'
						/>
					</div>
					<p> my YouTube</p>
				</a>
			</div>
		</div>
	)
}

export default Menumobile
