'use client'

import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { getAuth, signOut } from 'firebase/auth'

const Signin = () => {
	const { user } = useAuthContext()

	const router = useRouter()

	const sign = () => {
		router.push('/en/login')
	}

	const singout = () => {
		const auth = getAuth()
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			})
	}

	if (user) {
		return (
			<div className=''>
				<button
					onClick={() => singout()}
					className=' bg-green-700 shadow2 px-3 py-1 hover:shadow1 rounded-md cursor-pointer text-center  elem arrownone'
				>
					Sign Out
				</button>
			</div>
		)
	}

	return (
		<div className='' onClick={() => openmenumobil()}>
			<button
				onClick={() => sign()}
				className=' bg-red-700 shadow2 px-3 py-1 hover:shadow1 rounded-md cursor-pointer text-center  elem arrownone'
			>
				Sign in
			</button>
		</div>
	)
}

export default Signin
