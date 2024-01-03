'use client'
import { Gentium_Book_Plus } from 'next/font/google'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { getAuth, signOut } from 'firebase/auth'
import { Authuser, MobileMenus } from '../../../store/features/counterSlice'

const gentium = Gentium_Book_Plus({
	weight: '400',
	subsets: ['latin'],
})

const Signin = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const authuser = useSelector((state) => state.counter.authUser) || ''
	const mobileMenu = useSelector((state) => state.counter.mobileMenu)

	const singout = () => {
		const auth = getAuth()
		signOut(auth)
			.then(() => {
				dispatch(Authuser(false))
				dispatch(MobileMenus(mobileMenu))
			
			})
			.catch((error) => {
				// An error happened.
			})
	}

	const singin = () => {
		
		router.push('/login')
		dispatch(MobileMenus(mobileMenu))
	}

	return (
		<div>
			{authuser ? (
				<button
					onClick={() => singout()}
					className={` border-2 rounded-3xl border-zinc-700/50 px-10 py-2 hover:font-semibold justify-center  flex    duration-300  z-10   items-center gap-5  uppercase  ${gentium.className} text-xl`}
				>
					Вийти
				</button>
			) : (
				<button
					onClick={() => singin()}
					className={`border-2 rounded-3xl border-zinc-700/50 px-10 py-2 hover:font-semibold justify-center flex    duration-300  z-10   items-center gap-5  uppercase  ${gentium.className} text-xl`}
				>
					Увійти
				</button>
			)}
		</div>
	)
}

export default Signin
