'use client'
import { useRef, useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'
import { useRouter } from 'next/navigation'
import {
	PaperAirplaneIcon,
	ArrowPathIcon,
	StopCircleIcon,
} from '@heroicons/react/24/solid'
import { useChat } from 'ai/react'

import { Bot, ArrowLeft } from 'lucide-react'
import GrowingTextArea from './Textarea'
import { prompt } from '../Assistant/assiastant'

const Slug = () => {
	const title = useSelector((state) => state.counter.promptstudy)
	const router = useRouter()

	const promptone = useMemo(() => {
		return prompt.find((item) => item.title === title)?.select
	}, [title])

	const answer = useMemo(() => {
		return prompt.find((item) => item.title === title)?.answer
	}, [title])

	console.log(promptone)

	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		isLoading,
		error,
		reload,
		stop,
	} = useChat({ body: { promptone } })

	const [selectedFile, setSelectedFile] = useState()

	const messagesEndRef = useRef(null)
	const fileInputRef = useRef(null)

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	const handleFileChange = (e) => {
		// @ts-ignore
		console.log('File selected:', e.target.files[0])
		// @ts-ignore
		setSelectedFile(e.target.files[0])
	}

	const handleFileChangeClick = () => {
		// @ts-ignore
		fileInputRef.current.click()
	}

	return (
		<div
			className={` mx-auto  w-full max-w-4xl h-full  flex flex-col items-center justify-between gap-5 overflow-auto  relative elem `}
		>
			<div className='w-full  pt-5 flex justify-end'>
				<button className='flex ' onClick={() => router.back()}>
					<ArrowLeft />
					Назад
				</button>
			</div>
			<div className=' h-full w-full px-5 lg:px-10 elem'>
				<div className='my-6   w-full stretch  elem overflow-y-scroll '>
					{messages.length !== 0 ? (
						messages.map((e, i) => (
							<Message key={i} role={e.role} content={e.content} />
						))
					) : (
						<div className='w-full gap-5  flex flex-col items-center justify-center '>
							<span>
								<Bot width={60} height={60} color='white' />
							</span>
							<div className=' '>
								{' '}
								Привіт, Я Ваш особистий ШІ помічник, щоб моя відповідь була
								максимально корисна:
								<br />
								{answer?.map((e, i) => (
									<p key={i}>{e}</p>
								))}
							</div>
						</div>
					)}

					<div ref={messagesEndRef} />
					<div className='w-full h-full flex justify-center items-center text-red-500 '>
						{error?.message}
					</div>
				</div>
			</div>

			<div className='flex w-full  '>
				<form onSubmit={handleSubmit} className={`w-full p-5 `}>
					<div className='flex w-full justify-end gap-5 px-5 py-2'>
						<div
							className=' flex justify-end  cursor-pointer'
							onClick={() => stop()}
						>
							<StopCircleIcon className='h-6 w-6 stroke-slate-100 fill-slate-100 stroke-[1px] ' />
						</div>
						<div
							className=' flex justify-end  cursor-pointer'
							onClick={() => reload()}
						>
							<ArrowPathIcon className='h-6 w-6 stroke-slate-100 fill-none stroke-[1px] ' />
						</div>
					</div>
					<div className='group w-full py-1  flex items-center  bg-white  shadow-md z-20 elem rounded-2xl    '>
						{/* <div className='px-3'>
							<div className='flex'>
								<div
									onClick={handleFileChangeClick}
									className='btn relative p-0 text-black dark:text-white'
									aria-label='Attach files'
								>
									<div className='flex w-full gap-2 items-center justify-center'>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												clipRule='evenodd'
												d='M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z'
												fill='currentColor'
											></path>
										</svg>
									</div>
								</div>
							
								<input
									ref={fileInputRef}
									id='fileInput'
									name='fileInputa'
									multiple={true}
									onChange={handleFileChange}
									type='file'
									tabIndex={-1}
									className='hidden'
								/>
							</div>
						</div> */}

						<GrowingTextArea
							onChange={handleInputChange}
							value={input}
							className=' w-full  max-w-3xl
							 text-black bottom-0  rounded-lg  p-2 border-none outline-none px-5  max-h-[200px]'
						/>

						<button
							disabled={isLoading}
							type='submit'
							className=' right-0 bottom-6 py-2 text-[#a1a1a1] text-base   rounded-r-md  hover:text-white w-20  flex justify-center items-center absolute '
						>
							<div className=''>
								<PaperAirplaneIcon className='h-6 w-6 -rotate-12 stroke-[#12181c] fill-[#12181c]  ' />
							</div>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Slug
