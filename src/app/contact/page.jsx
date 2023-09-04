'use client'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

import contact from '../../../public/contact1.jpg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const metadata = {
	title: ' Contact Information',
	description: 'This is Contact Page',
}

const Contact = () => {

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
			<h1 className='text-xl md:text-4xl md:mb-10 text-center text-white'>
				Let&apos;s Keep in Touch
			</h1>
			<div className='flex items-center gap-10'>
				<div className='hidden md:flex flex-1 relative w-96 h-[600px]'>
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
						<p className='absolute -top-3 left-4 text-slate-400   w-16 flex justify-center text-[14px] group-hover:text-yellow-200/80 bg-[#111111]'>
							Name
						</p>
						<input
							type='text'
							name='name'
							required
							className='bg-transparent border border-slate-500 rounded-sm px-3 outline-none  text-slate-200 h-12 w-full text-sm  group-hover:border-[rgb(255,144,0)]/30 decoration-transparent '
						/>
					</div>
					<div className='relative group '>
						<p className='absolute -top-3 left-4 text-slate-400   w-16 flex justify-center text-[14px] group-hover:text-yellow-200/80 bg-[#111111]'>
							Email
						</p>
						<input
							required
							type='email'
							name='email'
							className='bg-[#111111] !important border border-slate-500 rounded-sm px-3 outline-none  text-slate-200 h-12 w-full text-sm  group-hover:border-[rgb(255,144,0)]/30 decoration-transparent '
						/>
					</div>
					<div className='relative group '>
						<p className='absolute -top-3 left-4 text-slate-400  px-2 w-fit flex justify-center text-[14px] group-hover:text-yellow-200/80 bg-[#111111]'>
							Message
						</p>
						<textarea
							className='w-full p-5 text-sm text-white mb-3 border border-slate-600 outline-none bg-transparent rounded-md'
							cols='30'
							rows='10'
							name='message'
						></textarea>
					</div>

					<button
						type='submit'
						className='relative bg-[#292929] inline-block py-2 text-[#a1a1a1] text-base overflow-hidden  rounded-md hover:bg-[#181818] hover:text-white'
					>
						Send
					</button>
					<ToastContainer />
				
				</form>
				
			</div>
		</div>
	)
}

export default Contact
