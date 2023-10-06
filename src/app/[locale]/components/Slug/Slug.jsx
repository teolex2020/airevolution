"use client"
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loader from '../Loader/Loader'
import { fetchGptAnswer } from '../../api/openaiApi.js'

const Slug = () => {
const [loader, setLoader] = useState(false)
const [messages, setMessages] = useState([])
const [answer, setAnswer] = useState(null)

const assis = useSelector((state) => state.data.titleAssist)
const prompt = useSelector((state) => state.data.promptAssist)





  return (
		<div className='w-full h-full flex gap-5'>
			{loader && <Loader />}
			<Formik
				initialValues={{ ass: '', message: '' }}
				validationSchema={Yup.object({
					ass: Yup.string()
						.max(30, 'Must be 30 characters or less')

						.required('Please enter your assistant'),
					message: Yup.string()
						.required('Please enter your  message')
						.min(1, 'Should be 1 chars minimum.')
						.max(10000, 'Must be 10000 characters or less'),
				})}
				onSubmit={async (values, {resetForm}) => {
  
	setLoader(true)
	try {
		const { ass, message } = values

		setMessages((prevMessages) => [
			...prevMessages,
			{ role: 'user', content: message },
		])

		messages.push(
			{
				role: 'system',
				content: `Hello, I am your ${ass} ${prompt} `,
			},
			{ role: 'user', content: message }
		)

     

		await fetchGptAnswer(setMessages, messages,  setAnswer, setLoader)

	} catch (error) {
		console.error('Error occurred:', error)
	}
}}
			>
				<Form className='flex-1 gap-5 flex flex-col'>
					<div className='relative group '>
						<p className='absolute -top-3 left-4 text-slate-400   w-fit px-2 flex justify-center text-[14px] group-hover:text-white bg-[#111111] rounded-lg'>
							{assis}
						</p>
						<Field
							type='text'
							name='ass'
							className='bg-transparent border border-slate-500 rounded-sm px-3 outline-none  text-slate-200 h-12 w-full text-sm  group-hover:shadow1 decoration-transparent '
						/>
						<ErrorMessage name='ass'>
							{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
						</ErrorMessage>
					</div>
					<div className='relative group '>
						<p className='absolute -top-3 left-4 text-slate-400  px-2 w-fit flex justify-center text-[14px] group-hover:text-white bg-[#111111]  rounded-lg'>
							Message
						</p>
						<Field
							className='w-full p-5 text-sm h-80 text-white mb-3 border border-slate-600 outline-none bg-transparent rounded-md group-hover:group-hover:shadow1'
							as='textarea'
							name='message'
						
						/>
						<ErrorMessage name='message'>
							{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
						</ErrorMessage>
					</div>
					<button
						type='submit'
						className='relative border border-slate-600 inline-block py-2 text-[#a1a1a1] text-base overflow-hidden  rounded-md  hover:text-white w-full hover:shadow1'
					>
						Send
					</button>
				</Form>
			</Formik>
			<div className='border border-slate-600 rounded-lg flex-1 p-5 h-[470px]  elem scroll'>
				{answer}
			</div>
		</div>
	)
}

export default Slug