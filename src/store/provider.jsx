'use client'
import { useEffect } from 'react'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { getAuth } from 'firebase/auth'
import firebase_app from '../firebase/config'
import { useDispatch } from 'react-redux'
import { Authuser, Loading, Id } from './features/counterSlice'
import { useRouter } from 'next/navigation'
import { PersistGate } from 'redux-persist/integration/react'
import Menumobile from '../app/components/Menumobile/Menumobile'
import Popup from '../app/components/Navbar/Popup'


export const MyComponent = () => {
	
	const dispatch = useDispatch()
	const auth = getAuth(firebase_app)
const router = useRouter()
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
			
				dispatch(Loading(false))

				dispatch(Authuser(user?.emailVerified))
				dispatch(Id(user?.uid))

				// Диспатч Redux Action тут
			} else {
		
				console.log('User is not logged in')
			}
		})

		return () => unsubscribe()
	}, [auth, dispatch, router])
}

export async function Providers({ children = {} }) {
	
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				
				<div>
					 <Popup />
				
				</div>

				<Menumobile />
				<MyComponent />
				{children}
			</PersistGate>
		</Provider>
	)
}
