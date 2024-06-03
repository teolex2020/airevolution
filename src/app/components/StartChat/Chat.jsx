'use client'
import { useRef, useEffect } from 'react'
import Message from './Message'
import { Gentium_Book_Plus } from 'next/font/google'
import { SendHorizontal } from 'lucide-react'
import GrowingTextArea from './Textarea'
import Image from 'next/image'
import { useAssistant } from 'ai/react'
import { useSelector} from 'react-redux'



const gentium = Gentium_Book_Plus({
	weight: '700',
	subsets: ['latin'],
})

const Chat = () => {
		const authUser = useSelector((state) => state.counter.authUser)
	const {
		status,
		messages,
		input,
		submitMessage,
		handleInputChange,
		error,
		stop,
	} = useAssistant({ api: '/api/assistant' })

	const inputRef = useRef(null)
	useEffect(() => {
		if (status === 'awaiting_message') {
			inputRef.current?.focus()
		}
	}, [status])

	const messagesEndRef = useRef(null)

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages])

	return (
		<div
			className={` mx-auto flex-1 w-full max-w-4xl  flex flex-col items-center mt-[2%] gap-5 overflow-auto  relative  main-content  `}
			style={{ maxHeight: 'calc(100vh - 104px)' }}
		>
			<div className='  w-full px-5 lg:px-10  overflow-y-scroll  elem'>
				<div className='my-6  w-full  pb-4 	'>
					{messages.length !== 0 ? (
						messages?.map((e, i) => (
							<>
								<Message key={i} role={e.role} content={e.content} />
								<div ref={messagesEndRef} />
							</>
						))
					) : (
						<>
							{messages.length === 0 && (
								<div
									className={`flex  flex-col items-center justify-center gap-3 text-center  relative min-h-[400px] `}
								>
									<div className='absolute'>
										<Image
											src='/logo1.webp'
											alt='bg'
											width={500}
											height={500}
											className='  opacity-[5%] '
											sizes='(min-width: 500px) 50vw, 100vw'
										/>
									</div>

									<h1
										className={`
												text-2xl md:text-3xl   leading-[1] text-center  flex items-center ${gentium.className} 
											`}
									>
										Unlock the Potential of AI for Your Business
									</h1>
									<h2 className='md:text-xl text-lg font-semibold'>
										Empower Your Business with AI-Driven Automation and Expert
										Consulting
									</h2>
									<div className='hidden md:block'>
										{' '}
										<Image
											src='/bot1.webp'
											alt='bg'
											width={50}
											height={50}
											className='  '
											sizes='(min-width: 500px) 50vw, 100vw'
										/>
									</div>

									<div className=' text-justify  lg:text-[19px] lg:px-8 pb-5 max-w-2xl'>
										<p>
											Welcome to the world of Artificial Intelligence! Our team
											is here to help you unlock the potential of artificial
											intelligence (AI) and integrate it into various aspects of
											your business. Our experts will provide you with support
											and advice on how to implement AI in your operations,
											supply chain, customer service, finance, healthcare, and
											more. Ready to transform your business with AI? Contact us
											today!
										</p>
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
					<div className='group w-full py-1  flex items-center  bg-white   z-40 elem rounded-xl   relative hover:shadow1 duration-300 '>
						{authUser ? (
							<>
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
								</button>{' '}
							</>
						) : (
							<div className='relative group w-full   '>
								<input
									disabled={true}
									type='text'
									className='h-10 text-black px-5 border-none outline-none'
									placeholder='Please Sign In '
								/>
								<span className='absolute  top-0  left-2   mb-2 w-fit p-2 bg-red-500  text-white  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm'>
									Please sign in.
								</span>
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	)
}

export default Chat
