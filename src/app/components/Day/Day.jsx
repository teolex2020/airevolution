'use client'
import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import signIn from '@/firebase/auth/signin'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { EyeIcon } from '@heroicons/react/24/solid'
import { EyeSlashIcon } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Day = () => {
	const [inputType, setInputType] = useState(true)

	const router = useRouter()

	const sign = async (values) => {
		let { email, password } = values
		const { result, error } = await signIn(email, password)

		if (error) {
			console.log('erre', error)
			return toast.error('User not registered')
		}
		toast.success('Success Notification !')
		console.log(result)
		return router.push('/')
	}



	return (
		<div className='flex justify-center items-center  '>
			<ToastContainer position='top-right' autoClose={1000} />
			<div className=' flex flex-col gap-3 items-center p-5 '>
				<h1 className='text-5xl text-slate-400 pb-5'>
					https://gptforwork.com/
				</h1>
				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={Yup.object({
						email: Yup.string()
							.max(30, 'Must be 30 characters or less')
							.email('Invalid email address')
							.required('Please enter your email'),
						password: Yup.string()
							.required('Please enter your password')
							.min(8, 'Should be 8 chars minimum.')
							.matches(/[a-zA-Z]/, 'Only contain Latin letters.'),
					})}
					onSubmit={sign}
				>
					<Form className='flex flex-col w-[300px] gap-5 '>
						<div className='relative group '>
							<p className='absolute -top-3 left-4 text-slate-400 bg-[#111111] rounded-lg  w-fit px-2 flex justify-center text-[14px] group-hover:text-blue-200/80'>
								Email
							</p>
							<Field
								name='email'
								type='email'
								className='bg-inherit border border-slate-500 rounded-sm px-3 outline-none  text-slate-200 h-12 w-full text-sm  group-hover:border-blue-200/80 decoration-transparent '
							/>
							<ErrorMessage name='email'>
								{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
							</ErrorMessage>
						</div>
						<div className='relative group'>
							<p className='absolute -top-3 left-4 text-slate-400 bg-neutral-950  w-20 flex justify-center text-[14px] group-hover:text-blue-200/80'>
								Password
							</p>
							<div
								onClick={() => setInputType(!inputType)}
								className='absolute right-5 bottom-3 opacity-60'
							>
								{inputType ? (
									<EyeSlashIcon className='h-5 w-5 stroke-slate-100 fill-none stroke-[1.4px]' />
								) : (
									<EyeIcon className='h-5 w-5 stroke-slate-100 fill-none stroke-[1.4px]' />
								)}
							</div>
							<Field
								type={inputType ? 'password' : 'text'}
								name='password'
								className='bg-transparent border border-slate-500 rounded-sm px-3 outline-none  text-slate-200 h-12 w-full group-hover:border-blue-200/80'
							/>
						</div>
						<ErrorMessage name='password'>
							{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
						</ErrorMessage>
						<button
							type='submit'
							className='bg-transparent border border-slate-500 hover:border-slate-300 rounded-sm px-3 outline-none  text-slate-400 h-12 w-full   hover:border-blue-200/80 z-10'
						>
							Sign In
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	)
}


export default Day
