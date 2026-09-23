import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import firebase_app from '@/firebase/config'

const auth = getAuth(firebase_app)

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			} else {
				setUser(null)
			}
			setLoading(false)
		})

		return () => unsubscribe()
	}, [])

	return (
		<AuthContext.Provider value={{ user }}>
			{loading ? (
				<div className=' flex justify-center bg-no-repeat bg-cover bg-center h-screen items-center'>
					<p className='loader'></p>
				</div>
			) : (
				children
			)}
		</AuthContext.Provider>
	)
}
