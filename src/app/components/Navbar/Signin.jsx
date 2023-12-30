'use client'
import { Gentium_Book_Plus } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { getAuth, signOut } from 'firebase/auth'

const gentium = Gentium_Book_Plus({
	weight: '400',
	subsets: ['latin'],
})

const Signin = () => {

const authuser = useSelector((state) => state.counter.authUser) || ""
	const router = useRouter()


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

	if (authuser) {
		return (
			<div className=''>
				<button
					onClick={() => singout()}
					className={` border-2 rounded-3xl border-zinc-700/50 px-10 py-2 hover:font-semibold justify-center  flex    duration-300  z-10   items-center gap-5  uppercase  ${gentium.className} text-xl`}
				>
					Вийти
				</button>
			</div>
		)
	}

	return (
		<div className=''>
			<button
				onClick={() => sign()}
				className={`border-2 rounded-3xl border-zinc-700/50 px-10 py-2 hover:font-semibold justify-center flex    duration-300  z-10   items-center gap-5  uppercase  ${gentium.className} text-xl`}
			>
				Увійти
			</button>
		</div>
	)
}

export default Signin
