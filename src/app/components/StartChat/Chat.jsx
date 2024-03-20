'use client'
import { useRef, useEffect } from 'react'
import Message from './Message'
import { Gentium_Book_Plus } from 'next/font/google'
import { useChat } from 'ai/react'
import { SendHorizontal } from 'lucide-react'
import GrowingTextArea from './Textarea'
import Image from 'next/image'
import {  experimental_useAssistant as useAssistant } from 'ai/react'

const gentium = Gentium_Book_Plus({
	weight: '700',
	subsets: ['latin'],
})

const Chat = () => {
	// const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
	// 	useChat()

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
	 
	// console.log(messages)

	// console.log('status', status)

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	

	return (
		<div
			className={` mx-auto flex-1 w-full max-w-4xl  flex flex-col items-center justify-between gap-5 overflow-auto  relative  main-content md:mt-10 `}
			style={{ maxHeight: 'calc(100vh - 104px)' }}
		>
			<div className='  w-full px-5 lg:px-10  overflow-y-scroll  elem'>
				<div className='my-6  w-full  pb-4 	'>
					{messages.length !== 0 ? (
						messages.map((e, i) => (
							<Message key={i} role={e.role} content={e.content} />
						))
					) : (
						<>
							{!error && messages.length === 0 && (
								<div
									className={`flex  flex-col items-center justify-center gap-3 text-center  relative lg:mt- `}
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
									<p className=' text-justify  lg:text-[19px] lg:px-8 py-5 max-w-2xl'>
										Welcome to the forefront of innovation where artificial
										intelligence meets enterprise efficiency. Our bespoke AI
										solutions are designed to propel your business into the
										future of automation. Experience the transformative power of
										AI with services tailored to:
										<br />
										- Streamline Operations: Our smart systems analyze your
										workflows to identify and implement the most efficient
										automation strategies.
										<br />
										- Enhance Decision-Making: With data-driven insights, we
										empower you to make informed decisions that drive growth and
										profitability.
										<br />
										- Boost Productivity: Unlock the full potential of your
										workforce by offloading routine tasks to our intelligent
										automation systems. <br />
										- Secure Competitive Edge: Stay ahead of the curve by
										adopting cutting-edge AI that keeps your services and
										products at the pinnacle of your industry. <br />
										<br />
										Join us in redefining business excellence. Transform your
										operations, ignite innovation, and lead the market with
										confidence. Step into the future-today.
									</p>
								</div>
							)}
						</>
					)}
					{status === 'in_progress' && (
						<div className='w-full h-full flex justify-center items-center  '>
							Loading ....
						</div>
					)}
					<div ref={messagesEndRef} />
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
							 text-black bottom-0  rounded-sm  p-2 border-none outline-none px-5  max-h-[200px] '
						/>

						<button
							disabled={status !== 'awaiting_message'}
							type='submit'
							className=' right-0  text-[#a1a1a1] text-base   rounded-r-md   w-20  flex justify-center items-center absolute hover:scale-110 duration-300 group'
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
