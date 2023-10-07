"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer/Foter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { AuthContextProvider } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
// 	title: 'Artificial Intelligence',
// 	description: 'This is the description',
// }






export default function RootLayout({ children }) {
	return (
		<html>
			<body className={inter.className}>
				<div className='max-w-[1366px] min-h-screen mx-auto flex flex-col justify-between sm:px-16 px-4 container'>
					<AuthContextProvider>
						<Provider store={store}>
							<Navbar />
							{children}
							<Footer />
						</Provider>
						
					</AuthContextProvider>
				</div>
			</body>
		</html>
	)
}
