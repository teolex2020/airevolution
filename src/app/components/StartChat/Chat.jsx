'use client'
import { useRef, useEffect } from 'react'
import Message from './Message'
import { Gentium_Book_Plus } from 'next/font/google'
import { SendHorizontal, Bot } from 'lucide-react'
import GrowingTextArea from './Textarea'
import Image from 'next/image'
import {  experimental_useAssistant as useAssistant } from 'ai/react'
import { motion } from 'framer-motion'
import { useChat } from 'ai/react'

const gentium = Gentium_Book_Plus({
	weight: '700',
	subsets: ['latin'],
})

const Chat = () => {
	 const { messages:messagesvision, input:inputvision, handleInputChange:handleInputChangevision, handleSubmit } = useChat({
			api: '/api/vision',
		})

		 const {
				status,
				messages,
				input,
				submitMessage,
				handleInputChange,
				error,
			} = useAssistant({
				api: '/api/assistant',
			})

	const messagesEndRef = useRef(null)
	 


	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])



		const fullText = `Hello. I am here to help you unlock the potential of artificial intelligence (AI) and integrate it into various aspects of your business. My goal is to provide you with expert support and advice on how to implement AI in operations, supply chain, customer service, finance, healthcare, and more.
		I look forward to your questions.`

	const variants = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				staggerChildren: 0.01,
			},
		},
	}

	const letters = fullText.split('')


	return (
		<div
			className={` mx-auto flex-1 w-full max-w-4xl  flex flex-col items-center justify-between gap-5 overflow-auto  relative  main-content md:mt-10 `}
			style={{ maxHeight: 'calc(100vh - 104px)' }}
		>
			<div className='  w-full px-5 lg:px-10  overflow-y-scroll  elem'>
				<div className='my-6  w-full  pb-4 	'>
					{messages.length !== 0 ? (
						messages.map((e, i) => (
							<>
								<Message key={i} role={e.role} content={e.content} />
								<div ref={messagesEndRef} />
							</>
						))
					) : (
						<>
							{!error && messages.length === 0 && (
								<div
									className={`flex  flex-col items-center justify-center gap-3 text-center  relative min-h-[400px] `}
								>
									<div className='absolute'>
										<Image
											src='/log.png'
											alt='bg'
											width={500}
											height={500}
											className='  opacity-[5%] '
											sizes='(min-width: 500px) 50vw, 100vw'
										/>
									</div>

									<h1
										className={`
												text-2xl lg:text-3xl   leading-[1] text-center  flex items-center ${gentium.className} 
											`}
									>
										Empower Your Business with AI-driven Automation
									</h1>
									<Bot size={44} className='' />

									<div className=' text-justify  lg:text-[19px] lg:px-8 py-5 max-w-2xl'>
										<p>
											Hello. I am here to help you unlock the potential of
											artificial intelligence (AI) and integrate it into various
											aspects of your business. My goal is to provide you with
											expert support and advice on how to implement AI in
											operations, supply chain, customer service, finance,
											healthcare, and more. I look forward to your questions.
										</p>
										{/* <motion.div
											variants={variants}
											initial='hidden'
											animate='visible'
										>
											{letters.map((letter, i) => (
												<motion.span key={i} variants={variants}>
													{letter}
												</motion.span>
											))}
										</motion.div> */}
									</div>
								</div>
							)}
						</>
					)}
					{status === 'in_progress' && (
						<div className='w-full h-full flex justify-center items-center  '>
							Processing ....
						</div>
					)}

					<div className='w-full h-full flex justify-center items-center  '>
						{error?.message}
					</div>
				</div>
			</div>

			<div className='flex flex-col w-full px-3 absolute bottom-0'>
				<form onSubmit={submitMessage} className={`w-full  `}>
					<div className='group w-full py-1  flex items-center  bg-white   z-20 elem rounded-xl   relative hover:shadow1 duration-300 '>
						<GrowingTextArea
							onChange={handleInputChange}
							value={input}
							className=' w-full  max-w-3xl
							 text-black bottom-0  rounded-sm  p-2 border-none outline-none px-3   max-h-[200px] '
						/>

						<button
							disabled={status !== 'awaiting_message'}
							type='submit'
							className=' right-0  text-[#a1a1a1] text-base   rounded-r-md   w-10  flex justify-center items-center absolute hover:scale-110 duration-300 group'
							title='Send message'
						>
							<div className=''>
								<SendHorizontal
									size={24}
									stroke='#182237 '
									className='group-hover:stroke-green-800'
								/>
							</div>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Chat
