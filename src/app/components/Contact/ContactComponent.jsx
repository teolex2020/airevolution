'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

import contact from '../../../../public/contact.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactComponent = () => {
   const form = useRef()

		const sendEmail = (e) => {
			e.preventDefault()

			emailjs
				.sendForm(
					'airevolution',
					'template_mo5n94a',
					form.current,
					'pehBhqPxgcjMnVfpZ'
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
		<div>
			<h1 className='text-xl md:text-4xl mb-2 lg:mb-10 text-center text-white'>
				Напишіть мені
			</h1>
			<div className='flex flex-col lg:flex-row lg:items-center gap-10'>
				<div className='flex  lg:flex-1 relative  h-72 lg:h-[470px]'>
					<Image
						src={contact}
						alt=''
						fill
						priority
						className='object-contain '
						sizes='(min-width: 500px) 50vw, 100vw'
					/>
				</div>
				<form
					className='flex-1 flex flex-col gap-5'
					ref={form}
					onSubmit={sendEmail}
				>
					<div className='relative group '>
						<p className='absolute -top-3 left-4 text-zinc-400   w-16 flex justify-center text-[14px]  bg-[#13181d]'>
							Name
						</p>
						<input
							type='text'
							name='name'
							required
							minLength='3'
							maxLength='50'
							className='bg-transparent border border-zinc-500 rounded-sm px-3 outline-none  text-zinc-200 h-12 w-full text-sm  group-hover:border-zinc-700  decoration-transparent cursor-pointer'
						/>
					</div>
					<div className='relative group '>
						<p className='absolute -top-3 left-4 text-zinc-400   w-16 flex justify-center text-[14px]  bg-[#13181d]'>
							Email
						</p>
						<input
							required
							type='email'
							name='email'
							minLength='3'
							maxLength='50'
							className='bg-[#13181d] !important border border-zinc-500 rounded-sm px-3 outline-none  text-zinc-200 h-12 w-full text-sm  group-hover:border-zinc-700  decoration-transparent cursor-pointer'
						/>
					</div>
					<div className='relative group '>
						<p className='absolute -top-3 left-4 text-zinc-400  px-2 w-fit flex justify-center text-[14px]  bg-[#13181d]'>
							Message
						</p>
						<textarea
							className='w-full p-5 text-sm text-white  border border-zinc-600 outline-none bg-transparent rounded-md group-hover:border-zinc-700 cursor-pointer'
							cols='30'
							rows='10'
							name='message'
							required
							minLength='3'
							maxLength='100'
						></textarea>
					</div>

					<button
						type='submit'
						className={`border-2 rounded-xl border-zinc-600 px-10 py-2 flex  hover:bg-blur   uppercase duration-300 z-10 justify-center`}
					>
						{' '}
						Send
					</button>
					<ToastContainer />
				</form>
			</div>
		</div>
	)
}

export default ContactComponent
