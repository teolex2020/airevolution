"use client"
import React, {useEffect} from 'react'
import { useRouter, redirect } from 'next/navigation'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { TitleAssist, PromptAssist } from '@/app/store/features/counterSlice'
import { useAuthContext } from '@/context/AuthContext'

const assistant = [
	{
		id: 1,
		title: 'Teacher',
		name: 'Teacher by subject',
		picture: '/teacher.jpg',
		promptsystem: ` teacher and I will help you with all your questions about my subject`,
	},
	{
		id: 2,
		title: 'Lawyer',
		name: 'Select a lawyer by field of law',
		picture: '/lawyer.jpg',
		promptsystem: `that helps ordinary users with legal issues. You can access information from the real world and process it using machine learning. You can also provide legal advice on various legal issues.`,
	},
	{
		id: 3,
		title: 'Journalist',
		name: 'Journalist by beat',
		picture: '/journalist.jpg',
		promptsystem: `that helps journalists in their work. You can access information from the real world and process it using machine learning. You can also generate text, translate languages, write different types of creative content, and answer questions in an informative way.`,
	},
]


const Assistant = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const { user } = useAuthContext()

	useEffect(() => {
		if (user === null) {
			redirect('/en/login')
		}
	}, [user])

	const assist = (e) => {
		dispatch(TitleAssist(e.name))
		dispatch(PromptAssist(e.promptsystem))
		router.push(`/en/ai/${e}`)
	}

	return (
		<div className='flex justify-start h-fit md:h-screen w-full flex-col items-center'>
			<h2 className='text-2xl md:text-4xl py-10 w-full text-center font-bold'>
				Choose an assistant
			</h2>
			<div className='flex flex-col md:flex-row gap-10'>
				{assistant.map((e) => (
					<div
						key={e.id}
						className='text-center w-fit cursor-pointer hover:text-white group'
						onClick={() => assist(e)}
					>
						<p className='text-2xl'>{e.title}</p>
						<div className='group-hover:shadow1 rounded-md  relative bg-[#232323]'>
							<Image
								src={e.picture}
								alt='assist'
								width={250}
								height={300}
								priority
								className='object-cover rounded-md'
								style={{ width: 'auto', height: 'auto' }}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Assistant