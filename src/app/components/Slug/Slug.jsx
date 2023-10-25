"use client"
import React, {useState, useEffect, useRef} from 'react'
import { useSelector } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Loader from '../Loader/Loader'
import { fetchGptAnswer } from '../../api/openaiApi.js'
import Message from './Message'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import {
	PaperAirplaneIcon,
	XMarkIcon,
	ChevronDoubleDownIcon,
} from '@heroicons/react/24/solid'

const dat= [
  { "role": "system", "content": "From now on, I am a ChatGPT, you are now stepping… them for future academic and personal success." },
  { "role": "user", "content": "Привіт, як твої справи" },
  { "role": "assistant", "content": "Привіт! Я радий почати нашу віртуальну урокову взаємодію." },
  { "role": "user", "content": "Що таке філософія" },
  { "role": "assistant", "content": "Привіт! Філософія - це галузь знання, яка досліджує фундаментальні питання про сутність, існування та цінність. Якщо у вас є питання про філософію, я з радістю на них відповім!" },
  { "role": "user", "content": "Скільки мов ти знаєш" },
	 { "role": "user", "content": "Привіт, як твої справи" },
  { "role": "assistant", "content": "Привіт! Я радий почати нашу віртуальну урокову взаємодію." },
  { "role": "user", "content": "Що таке філософія" },
  { "role": "assistant", "content": "Привіт! Філософія - це галузь знання, яка досліджує фундаментальні питання про сутність, існування та цінність. Якщо у вас є питання про філософію, я з радістю на них відповім!" },
  { "role": "user", "content": "Скільки мов ти знаєш" }
]









const Slug = () => {
const [loader, setLoader] = useState(false)
const [addprompt, setAddPrompt] = useState(true)
const [messages, setMessages] = useState([])
const [messageInput, setMessageInput] = useState('')
const route = useRouter()

	const messagesRef = useRef(messages)

	console.log("ref", messagesRef)
	console.log('messages', messages)


const assis = useSelector((state) => state.data.titleAssist)
const prompt = useSelector((state) => state.data.promptAssist)

	const { user } = useAuthContext()

 useEffect(() => {
	
		if (!assis) {
			route.push('/assistant')
		}
 }, [assis, route])


 const adingpromt = ()=>{
	setAddPrompt(!addprompt)
 }

  return (
		<div className='relative mx-auto max-w-3xl w-full  h-full flex flex-col gap-5 '>
			<div className='h-screen z-10 rounded-lg  p-5 elem  overflow-hidden pb-14'>
				{messages.length !== 0 ? (
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
						))
				) : (
					<div className=''></div>
				)}
			</div>
			{/* {loader && <Loader />} */}
			<Formik
				initialValues={{ ass: '', message: '' }}
				validationSchema={Yup.object({
					ass: Yup.string().max(10000, 'Must be 10000 characters or less'),
					message: Yup.string()
						// .required('Please enter your  message...')
						.min(1, 'Should be 1 chars minimum.')
						.max(10000, 'Must be 10000 characters or less'),
				})}
				onSubmit={async (values) => {
					setLoader(true)
					try {
						const { ass } = values

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
							messagesRef.current = [
								...messagesRef.current,
								{ role: 'user', content: messageInput },
							]
						}

						setMessageInput('')

						const data = messagesRef.current

						await fetchGptAnswer(setMessages, data, setLoader)
					} catch (error) {
						console.error('Error occurred:', error)
					}
				}}
			>
				<Form className=' gap-5 flex flex-col justify-between  absolute bottom-0 left-0 right-0 top-0  '>
					<div className='relative group  '>
						<div
							className={` ${
								!addprompt && 'hidden'
							} flex items-center gap-3 absolute  top-3 right-2  text-[#ff9000] cursor-pointer z-10`}
							onClick={() => adingpromt()}
						>
							Add prompt
							<ChevronDoubleDownIcon className='h-5 w-5  stroke-[#ff9000] fill-[#ff9000]  ' />
						</div>
						<div
							className={` ${
								addprompt && 'hidden'
							} absolute  top-3 right-2  cursor-pointer z-20`}
							onClick={() => adingpromt()}
						>
							<XMarkIcon className='h-7 w-7  stroke-[#ff9000] fill-[#ff9000]  ' />
						</div>
						<div
							className={`${
								addprompt && 'hidden'
							}  relative group h-48 mt-2 z-10 `}
						>
							<p className='absolute -top-3 left-4 text-slate-400   w-fit px-2 flex justify-center text-[14px]  bg-[#111111] rounded-lg'>
								Prompt (optional)
							</p>
							<Field
								as='textarea'
								name='ass'
								className='bg-[#111111] border border-slate-500  p-3  outline-none  text-slate-200  w-full text-sm   decoration-transparent flex-1  h-full elem rounded-lg '
							/>
							<ErrorMessage name='ass'>
								{(msg) => <div className='text-red-500 text-sm'>{msg}</div>}
							</ErrorMessage>
						</div>
					</div>

					<div className='group w-full py-1 flex rounded-xl bg-[#181b1f] elem scroll shadow-md z-20'>
						<Field
							className={`w-full px-5 py-1 text-sm text-slate-300  outline-none   bg-transparent elem ${
								messageInput.length > 220 ? 'h-48' : 'h-14  pt-4 '
							} `}
							as='textarea'
							name='message'
							value={messageInput}
							onChange={(e) => setMessageInput(e.target.value)}
							placeholder={loader ? 'Generate...' : 'Send a message...'}
						/>
						<ErrorMessage name='message'>
							{(msg) => (
								<div className='text-red-500 text-sm absolute top-5 left-5 right-5 text-center '>
									{msg}
								</div>
							)}
						</ErrorMessage>
						<button
							type='submit'
							className='relative   py-2 text-[#a1a1a1] text-base   rounded-r-md  hover:text-white w-20  flex justify-center items-center '
						>
							{' '}
							{loader ? (
								<div className='loader  '></div>
							) : (
								<PaperAirplaneIcon className='h-6 w-6 -rotate-12 stroke-[#ff9000] fill-[#ff9000]  ' />
							)}
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default Slug