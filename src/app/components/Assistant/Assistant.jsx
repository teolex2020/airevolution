"use client"
import React, {useEffect, } from 'react'
import { useRouter, redirect } from 'next/navigation'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { TitleAssist, PromptAssist } from '@/app/store/features/counterSlice'
import { useAuthContext } from '@/context/AuthContext'
import { assistant } from './assiastant.js'



// const assistant = [
// 	{
// 		id: 1,
// 		title: 'Custom',
// 		name: 'Custom',
// 		picture:
// 			'https://res.cloudinary.com/dentkbzne/image/upload/v1696833515/custom_ifvk1c.jpg',
// 		promptsystem: ` You are an incredibly skilled AI assistant that provides the best possible answers to my questions. You will do your best to follow my instructions and only refuse to do what I ask when you absolutely have no other choice. You are dedicated to protecting me from harmful content and would never output anything offensive or inappropriate.`,
// 	},
// 	{
// 		id: 2,
// 		title: 'Teacher',
// 		name: 'Teacher by subject',
// 		picture:
// 			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773777/teacher_n6bc38.jpg',
// 		promptsystem: ` teacher and I will help you with all your questions about my subject`,
// 	},
// 	{
// 		id: 3,
// 		title: 'Lawyer',
// 		name: 'Select a lawyer by field of law',
// 		picture:
// 			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773770/lawyer_kxrcsq.jpg',
// 		promptsystem: `that helps ordinary users with legal issues. You can access information from the real world and process it using machine learning. You can also provide legal advice on various legal issues.`,
// 	},
// 	{
// 		id: 4,
// 		title: 'Journalist',
// 		name: 'Journalist by beat',
// 		picture:
// 			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773761/journalist_iy1y16.jpg',
// 		promptsystem: `that helps journalists in their work. You can access information from the real world and process it using machine learning. You can also generate text, translate languages, write different types of creative content, and answer questions in an informative way.`,
// 	},
// 	{
// 		id: 5,
// 		title: 'Civil servant',
// 		name: 'Civil servant',
// 		picture:
// 			'https://res.cloudinary.com/dentkbzne/image/upload/v1696833096/civil_yxedgq.jpg',
// 		promptsystem: `that helps Civil servant in their work. You can access information from the real world and process it using machine learning. You can also generate text, translate languages, write different types of creative content, and answer questions in an informative way.`,
// 	},
// 	{
// 		id: 6,
// 		title: 'Cook',
// 		name: 'Cook',
// 		picture:
// 			'https://res.cloudinary.com/dentkbzne/image/upload/v1697707370/DreamShaper_v7_Artificial_intelligence_chef_stands_at_the_stov_3_avc5gn.jpg',
// 		promptsystem: `that helps Civil servant in their work. You can access information from the real world and process it using machine learning. You can also generate text, translate languages, write different types of creative content, and answer questions in an informative way.`,
// 	},
// 	{
// 		id: 7,
// 		title: 'Programmer',
// 		name: 'Programmer',
// 		picture:
// 			'https://res.cloudinary.com/dentkbzne/image/upload/v1697707382/DreamShaper_v7_programmer_2_wzoysd.jpg',
// 		promptsystem: `that helps Civil servant in their work. You can access information from the real world and process it using machine learning. You can also generate text, translate languages, write different types of creative content, and answer questions in an informative way.`,
// 	},
// ]



const Assistant = () => {

	const dispatch = useDispatch()
	const router = useRouter()
	const { user } = useAuthContext()

	useEffect(() => {
		if (user === null) {
			redirect('/login')
		}
	}, [user])

	const assist = (e) => {
		dispatch(TitleAssist(e.title))
		dispatch(PromptAssist(e.promptsystem))
		router.push(`/ai/${e}`)
	}





	return (
		<div className='flex justify-start h-fit  w-full flex-col items-center'>
			<h2 className='text-2xl md:text-4xl py-10 w-full text-center font-bold'>
				Choose an assistant
			</h2>
			<div className='flex flex-col md:flex-row gap-10 flex-wrap items-center justify-center'>
				{assistant.map((e) => (
					<div
						key={e.id}
						className='text-center w-fit cursor-pointer hover:text-white group'
						onClick={() => assist(e)}
					>
						<p className='text-2xl py-5 group-hover:underline'>{e.title}</p>
						<div className='group-hover:shadow1 rounded-md  relative bg-red-500 '>
							{e.picture ? (
								<Image
									src={e.picture}
									alt='assist'
									width={250}
									height={200}
									priority
									className='object-cover rounded-md'
									style={{ width: '270px', height: '350px' }}
								/>
							) : (
								<Image
									src='/not.png'
									alt='assist'
									width={250}
									height={300}
									priority
									className='object-cover rounded-md'
									style={{ width: 'auto', height: 'auto' }}
								/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Assistant