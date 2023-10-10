'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { auth, Providers, ProvidersGit } from '@/firebase/config.js'
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'

const Login = () => {


	const router = useRouter()

	const signupWithGoogle = () => {
		signInWithPopup(auth, Providers)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential.accessToken
				// The signed-in user info.
				const user = result.user
				toast.success('Success Notification !')
				return router.push('/')
			})
			.catch((error) => {
				console.log(error)
				// Handle Errors here.
				toast.error('User not registered')
			})
	}


	const signupWithGithub = () => {
		signInWithPopup(auth, ProvidersGit)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GithubAuthProvider.credentialFromResult(result)
				const token = credential.accessToken
				// The signed-in user info.
				const user = result.user
				toast.success('Success Notification !')
				return router.push('/')
			})
			.catch((error) => {
				console.log(error)
				// Handle Errors here.
				toast.error('User not registered')
			})
	}

	return (
		<div className='flex justify-center items-center  flex-col gap-5  '>
			<ToastContainer position='top-right' autoClose={1000} />

			<div
				onClick={signupWithGoogle}
				className=' bg-gradient-to-r from-pink-100/30 via-red-500 to-yellow-500/30  rounded-sm p-[1px] outline-none  text-slate-300 h-12 w-80   z-10  cursor-pointer hover:to-yellow-500 hover:from-pink-100'
			>
				<div className='bg-[#111111] w-full h-full flex justify-center items-center '>
					<Image
						src='Google.svg'
						alt='google'
						width={30}
						height={30}
						className='pr-5'
						style={{ width: '45px', height: '30px' }}
					/>
					Sign in with Google
				</div>
			</div>
			<div
				onClick={signupWithGithub}
				className=' bg-gradient-to-r from-yellow-100/30 via-green-500 to-pink-500/30  rounded-sm p-[1px] outline-none  text-slate-300 h-12 w-80   z-10  cursor-pointer hover:to-pink-500 hover:from-yellow-100'
			>
				<div className='bg-[#111111] w-full h-full flex justify-center items-center '>
					<Image
						src='Github.svg'
						alt='google'
						width={30}
						height={30}
						className='pr-5'
						style={{ width: '45px', height: '30px' }}
					/>
					Sign in with Github
				</div>
			</div>
		</div>
	)
}

export default Login
