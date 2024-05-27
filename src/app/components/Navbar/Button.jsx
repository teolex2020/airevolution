'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSelector,  } from 'react-redux'
import { getAuth, signOut } from 'firebase/auth'




const Button = () => {
	const {  authUser } = useSelector((state) => state.counter)
const auth = getAuth()
console.log(authUser)


	const router = useRouter()
	

	const singout = () => {
	signOut(auth)
	}

	return (
		<div className=' '>
			{authUser ? (
				<button
					onClick={() => singout()}
					className={`rounded-full border-2 px-7 py-2 bg-blur border-[#2a2e57] hover:shadow1 duration-300 text-sm   right-5 `}
				>
					<p className='duration-300  '>Sign Out</p>
				</button>
			) : (
				<button
					onClick={() => router.push('/login')}
					className={`rounded-full border-2 px-7 py-2 bg-blur border-[#2a2e57] hover:shadow1 duration-300 text-sm  right-5 `}
				>
					<p className='duration-300 '>Sign In</p>
				</button>
			)}
		</div>
	)
}

export default Button
