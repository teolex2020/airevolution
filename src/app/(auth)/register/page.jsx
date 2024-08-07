'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter, redirect } from 'next/navigation'
import { EyeIcon } from '@heroicons/react/24/solid'
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import signUp from '../../../firebase/auth/signup.js'
import { auth, Providers } from '../../../firebase/config.js'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'


const Register = () => {

	const id = useSelector((state) => state.counter.id)
	useEffect(() => {
		if (id) {
			redirect('/')
		}
	}, [id])

	const [inputType, setInputType] = useState(true)

	const router = useRouter()

	const signupWithGoogle = () => {
		signInWithPopup(auth, Providers)
			.then((result) => {
				toast.success('Success Notification !')
				return router.push('/')
			})
			.catch((error) => {
				// Handle Errors here.
				toast.error('User not found')
			})
	}

	return (
		<div className='flex justify-center items-center h-screen   '>
			<ToastContainer position='top-right' autoClose={1000} />
			<div className=' flex flex-col gap-3 items-center p-5 '>
				<div className='text-5xl text-slate-400'>Зареєструватися</div>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: '',
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.max(64, 'Should be 64 chars maximum.')
							.required('Your Name Is Required!'),
						email: Yup.string()
							.max(64, 'Should be 64 chars maximum.')
							.email('Invalid email')
							.required('Your Email Is Required!'),
						password: Yup.string()
							.required('No password provided.')
							.min(8, 'Should be 8 chars minimum.'),
					})}
					onSubmit={async (values, { setSubmitting, resetForm }) => {
						let { email, password } = values
						const { result, error } = await signUp(email, password)

						if (error) {
							return toast.error('User not found')
						}
						// toast.success('Success Notification !')
						setSubmitting(false)
						resetForm()
						// else successful

						return router.push('/')
					}}
				>
					<Form className='flex flex-col w-[300px] gap-5 lg:mt-5'>
						<div className='relative group'>
							<p className='absolute -top-3 left-4 text-slate-400 bg-[#11171c] rounded-lg  px-2 flex justify-center text-[14px] group-hover:text-blue-200/80'>
								Логін
							</p>
							<Field
								name='name'
								type='text'
								className='bg-transparent border border-slate-500 rounded-sm px-3 outline-none  text-slate-400 h-12 w-full group-hover:border-blue-200/80'
							/>
							<ErrorMessage name='name'>
								{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
							</ErrorMessage>
						</div>
						<div className='relative group'>
							<p className='absolute -top-3 left-4 text-slate-400 bg-[#11171c] rounded-lg  px-2  flex justify-center text-[14px] group-hover:text-blue-200/80'>
								Електронна пошта
							</p>
							<Field
								name='email'
								type='email'
								className='bg-transparent border border-slate-500 rounded-sm px-3 outline-none  text-slate-400 h-12 w-full group-hover:border-blue-200/80'
							/>
							<ErrorMessage name='email'>
								{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
							</ErrorMessage>
						</div>
						<div className='relative group '>
							<p className='absolute -top-3 left-4 text-slate-400 bg-[#11171c] rounded-lg  px-2 flex justify-center text-[14px] group-hover:text-blue-200/80'>
								Пароль
							</p>
							<div
								onClick={() => setInputType(!inputType)}
								className='absolute right-5 top-3 opacity-60'
							>
								{inputType ? (
									<EyeSlashIcon className='h-5 w-5 stroke-slate-100 fill-none stroke-[1.4px]' />
								) : (
									<EyeIcon className='h-5 w-5 stroke-slate-100 fill-none stroke-[1.4px]' />
								)}
							</div>
							<Field
								name='password'
								type={inputType ? 'password' : 'text'}
								className='bg-transparent border border-slate-500 rounded-sm px-3 outline-none  text-slate-400 h-12 w-full group-hover:border-blue-200/80'
							/>
							<ErrorMessage name='password'>
								{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
							</ErrorMessage>
						</div>

						<button
							type='submit'
							className='bg-transparent border border-slate-500 hover:border-slate-300 rounded-sm px-3 outline-none  text-slate-400 h-12 w-full   hover:border-blue-200/80 z-10'
						>
							Зареєструватися
						</button>
					</Form>
				</Formik>
				<div className='  w-[300px]  text-ms flex justify-center items-center gap-3 text-slate-500 '>
					<hr className='border-1 border-slate-600 w-full' />
					or <hr className='border-1 border-slate-600 w-full' />
				</div>
				<button
					onClick={signupWithGoogle}
					className='bg-transparent border border-slate-500 hover:border-slate-300 rounded-sm px-3 outline-none  text-slate-400 h-12 w-[300px]  hover:border-blue-200/80 z-10'
				>
					Зареєструватися через Google
				</button>

				<div className='flex space-x-3'>
					<p className='text-slate-400 text-[10px]'> Вже зареєстрований?</p>
					<Link className='text-blue-200/80 text-[10px] z-10' href='/login'>
						Увійти
					</Link>
				</div>
				{/* <div className='text-[10px] text-slate-400 z-10'>
					{t('agree')}
					<div>
						<Link href='/teamofservise'>
							<span className='underline cursor-pointer'>{t('service')}</span>
						</Link>
						<span> & </span>{' '}
						<Link href='/privatpolicy'>
							<span className='underline cursor-pointer'>{t('policy')}</span>
						</Link>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default Register
