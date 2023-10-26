'use client'
import React, { useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import Message from './Message'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import {
	PaperAirplaneIcon,
	XMarkIcon,
	ChevronDoubleDownIcon,
} from '@heroicons/react/24/solid'
import { useChat } from 'ai/react'

const Slug = () => {

	const assis = useSelector((state) => state.data.titleAssist)
	const prompt = useSelector((state) => state.data.promptAssist)
const [promptMessage, setPromptMessage] = useState('')
	const [addprompt, setAddPrompt] = useState(true)
	const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
		useChat({ body: { prompt, promptMessage } })
	const route = useRouter()



	

	const { user } = useAuthContext()

	useEffect(() => {
		if (!assis) {
			route.push('/assistant')
		}
	}, [assis, route])

	const adingpromt = () => {
		setAddPrompt(!addprompt)
	}

	return (
		<div className='relative mx-auto max-w-3xl w-full  h-full flex flex-col gap-5 '>
			<div className='h-screen z-10 rounded-lg  p-5 elem  overflow-hidden pb-14'>
				{messages.length !== 0 ? (
					messages.map((e, i) => (
						<Message
							key={i}
							role={e.role}
							content={e.content}
							assis={assis}
							user={user}
						/>
					))
				) : (
					<div></div>
				)}
				<div className='w-full h-full flex justify-center items-center'>
					{error}
				</div>
			</div>

			<form onSubmit={handleSubmit}>
				<div className=' gap-5 flex flex-col justify-between  absolute bottom-0 left-0 right-0 top-0  '>
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
							<textarea
								value={promptMessage}
								onChange={(e) => setPromptMessage(e.target.value)}
								className='bg-[#111111] border border-slate-500  p-3  outline-none  text-slate-200  w-full text-sm   decoration-transparent   h-full elem rounded-lg '
							/>
						</div>
					</div>

					<div className='group w-full py-1 flex items-center rounded-3xl bg-[#181b1f] elem scroll shadow-md z-20'>
						<textarea
							className={`w-full px-5  py-1 text-sm text-slate-300  outline-none   bg-transparent elem  ${
								input.length > 220 ? 'h-48' : 'h-14  pt-4 '
							} `}
							value={input}
							onChange={handleInputChange}
							placeholder={isLoading ? 'Generate...' : 'Send a message...'}
						/>

						<button
							type='submit'
							className='relative   py-2 text-[#a1a1a1] text-base   rounded-r-md  hover:text-white w-20  flex justify-center items-center '
						>
							{' '}
							{isLoading ? (
								<div className='loader  '></div>
							) : (
								<PaperAirplaneIcon className='h-6 w-6 -rotate-12 stroke-[#ff9000] fill-[#ff9000]  ' />
							)}
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Slug
