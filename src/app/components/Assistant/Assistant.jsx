"use client"
import React, {useEffect, } from 'react'
import { useRouter, redirect } from 'next/navigation'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { TitleAssist, PromptAssist } from '@/app/store/features/counterSlice'
import { useAuthContext } from '@/context/AuthContext'
import { assistant } from './assiastant.js'






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
		router.push(`/ai/${e.title}`)
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
						<div className='group-hover:shadow1 rounded-md  relative bg-[#292e35] '>
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