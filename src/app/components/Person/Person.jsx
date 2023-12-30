'use client'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux'
const Day = () => {

	const router = useRouter()
const id = useSelector((state) => state.counter.id)
	


	const handldata = (values) => {
		console.log(values)
	}

	return (
		<div className='flex justify-center  border border-zinc-700/50 shadow-lg max-w-2xl w-full mx-auto p-5 shadow2 relative'>
			<div
				className='absolute top-2 right-2 z-10'
				onClick={() => router.back()}
			>
				<XMarkIcon className='w-8 h-8' />
			</div>
			<ToastContainer position='top-right' autoClose={1000} />

			<Formik
				initialValues={{ age: '', gender: '', problem: '' }}
				validationSchema={Yup.object({
					age: Yup.string().required('Оберіть вік дитини'),
					gender: Yup.string().required('Оберіть стать дитини'),
					problem: Yup.string()
						.max(500, 'Максимум 500 знаків')
						.required('Опишіть проблему'),
				})}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					console.log(values)

const datafetch = "hello word"

					await fetch('/api/chat', {
						method: 'POST',
						body: JSON.stringify({ messages:datafetch }),
					})
						.then((res) => res.json())
						.then((data) => {
							console.log(data)
						})

					if (error) {
						return toast.error('User not found')
					}
					// toast.success('Success Notification !')
					setSubmitting(false)
					resetForm()
					// else successful

					return router.push(`/assistant/ai/${id}`)
				}}
			>
				<Form className='flex flex-col  gap-5 w-full'>
					<div className='flex gap-5 w-full'>
						{' '}
						<div className='relative group flex-1'>
							<p className=' left-4   rounded-lg  w-fit px-2 flex justify-center lg:text-xl text-blue-400 group-hover:text-green-300/80 py-2'>
								Вік
							</p>

							<Field
								as='select'
								name='age'
								className='bg-inherit border-2 border-zinc-700/50 rounded-sm px-3 outline-none  text-slate-200 h-12 w-full   group-hover:border-zinc-700/80 decoration-transparent text-lg '
							>
								<option key='0' value=''>
									Обрати
								</option>
								{Array.from({ length: 15 }, (_, i) => (
									<option key={i} className='bg-[#13181d] ' value={i + 4}>
										{i + 4}
									</option>
								))}
							</Field>
							<ErrorMessage name='age'>
								{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
							</ErrorMessage>
						</div>
						<div className='relative group flex-1'>
							<p className=' left-4   rounded-lg  w-fit px-2 flex justify-center lg:text-xl text-blue-400 group-hover:text-green-300/80 py-2'>
								Стать
							</p>
							<Field
								name='gender'
								as='select'
								className='bg-inherit border-2 border-zinc-700/50 rounded-sm px-3 outline-none  text-slate-200 h-12 w-full text-lg  group-hover:border-zinc-700/80 decoration-transparent '
							>
								<option key='0' value=''>
									Обрати
								</option>
								<option className='bg-[#13181d] ' value='хлопчик'>
									Хлопчик
								</option>
								<option className='bg-[#13181d] ' value='Дівчинка'>
									Дівчинка
								</option>
							</Field>
							<ErrorMessage name='gender'>
								{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
							</ErrorMessage>
						</div>
					</div>
					<div className='relative group  w-full'>
						<p className='left-4   rounded-lg  w-fit px-2 flex justify-center lg:text-xl text-blue-400 group-hover:text-green-300/80 py-2'>
							Опишить основні проблеми в навчанні
						</p>
						<Field
							placeholder='Для прикладу:  Грає постійно в ігри не хоче приділяти час домашнім завданням'
							as='textarea'
							name='problem'
							className='bg-inherit border-2 border-zinc-700/50 rounded-sm px-3 outline-none  text-slate-200 h-96 w-full text-lg  group-hover:border-zinc-700/80 decoration-transparent p-2'
						/>

						<ErrorMessage name='problem'>
							{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
						</ErrorMessage>
					</div>
					<button
						type='submit'
						className='bg-transparent border-2 border-zinc-700/50 rounded-sm px-3 outline-none   h-12 w-full text-xl  hover:border-zinc-700/80 z-10 text-blue-400 hover:text-green-300/80 '
					>
						Отримати рекомендації
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default Day
