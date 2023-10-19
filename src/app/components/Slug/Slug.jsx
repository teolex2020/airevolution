"use client"
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loader from '../Loader/Loader'
import { fetchGptAnswer } from '../../api/openaiApi.js'
import Message from './Message'
import { useAuthContext } from '@/context/AuthContext'

const Slug = () => {
const [loader, setLoader] = useState(false)
const [messages, setMessages] = useState([])
const [messageInput, setMessageInput] = useState('')

console.log(messages)

const assis = useSelector((state) => state.data.titleAssist)
const prompt = useSelector((state) => state.data.promptAssist)

	const { user } = useAuthContext()



  return (
		<div className='w-full h-full flex flex-col md:flex-row gap-5 relative pt-10'>
			<div className='absolute w-full text-center top-0 text-xl text-[#ff9000]'>
				Hello I am a {assis} ...
			</div>
			{loader && <Loader />}
			<Formik
				initialValues={{ ass: '', message: '' }}
				validationSchema={Yup.object({
					ass: Yup.string().max(30, 'Must be 30 characters or less'),
					message: Yup.string()
						// .required('Please enter your  message...')
						.min(1, 'Should be 1 chars minimum.'),
					// .max(10000, 'Must be 10000 characters or less')
				})}
				onSubmit={async (values) => {
			
					setLoader(true)
					try {
						const { ass } = values 
						 
						console.log("input",messageInput)
						if (messages.length === 0) {
							messages.push(
								{
									role: 'system',
									content: `From now on, I am a ${prompt} ${ass} `,
								},
								{ role: 'user', content: messageInput }
							)
						} else {
							setMessages((prevMessages) => [
								...prevMessages,
								{ role: 'user', content: messageInput },
							])
						}

						await fetchGptAnswer(setMessages, messages, setLoader)
						setMessageInput('')
						
					} catch (error) {
						console.error('Error occurred:', error)
					}
				}}
			>
				<Form className='flex-1 gap-5 flex flex-col h-[470px] justify-between'>
					<div className='relative group h-full '>
						<p className='absolute -top-3 left-4 text-slate-400   w-fit px-2 flex justify-center text-[14px] group-hover:text-white bg-[#111111] rounded-lg'>
							Prompt
						</p>
						<Field
							as='textarea'
							name='ass'
							className='bg-transparent border border-slate-500 rounded-sm px-3 outline-none  text-slate-200  w-full text-sm  group-hover:shadow1 decoration-transparent flex-1 h-full elem scroll'
						/>
						<ErrorMessage name='ass'>
							{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
						</ErrorMessage>
					</div>
					<div className='relative group h-full '>
						<p className='absolute -top-3 left-4 text-slate-400  px-2 w-fit flex justify-center text-[14px] group-hover:text-white bg-[#111111]  rounded-lg'>
							Message
						</p>
						<Field
							className='w-full p-5 text-sm flex-1 text-white mb-3 border border-slate-600 outline-none bg-transparent rounded-md group-hover:group-hover:shadow1 elem scroll h-full '
							as='textarea'
							name='message'
							value={messageInput}
							onChange={(e) => setMessageInput(e.target.value)}
						/>
						<ErrorMessage name='message'>
							{(msg) => (
								<div className='text-red-500 text-sm absolute top-5 left-5 right-5 text-center '>
									{msg}
								</div>
							)}
						</ErrorMessage>
					</div>
					<button
						type='submit'
						className='relative border border-slate-600 inline-block py-2 text-[#a1a1a1] text-base overflow-hidden  rounded-md  hover:text-white w-full hover:shadow1 h-20'
					>
						Send
					</button>
				</Form>
			</Formik>
			<div className='border border-slate-600 rounded-lg flex-1 p-5 h-[470px]  elem scroll relative'>
				{messages &&
					messages
						.slice(1)
						.map((e, i) => (
							<Message
								key={i}
								role={e.role}
								content={e.content}
								assis={assis}
								user={user}
							/>
						))}
			</div>
		</div>
	)
}

export default Slug