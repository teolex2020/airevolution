import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer/Foter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Providers } from '../store/provider.jsx'
import Contact from './components/Contact/Contact.jsx'
import clsx from 'clsx'

export async function generateMetadata() {
	return {
		title: {
			default: 'AI consulting services',
		},
		openGraph: {
			title: 'AI consulting services',
			description: 'AI consulting services',
			image: '/aboutme.webp',
		},
		twitter: {

			title: 'AI consulting services',
			description: 'AI consulting services',
			image: '/aboutme.webp',
		},
	}
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
	return (
		<html>
			<body className={clsx(inter.className, ' scroll')}>
				<div className='min-h-screen  mx-auto flex flex-col justify-between  relative '>
					<Providers>
						<Contact/>
						<Navbar />
						{children}
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	)
}
