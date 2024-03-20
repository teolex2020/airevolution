import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer/Foter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Providers } from '../store/provider.jsx'
import Image from 'next/image'
import clsx from 'clsx'


export async function generateMetadata() {
	return {
		icons: {
			icon: '/favicon-32x32.png',
		},

		title: {
			default: 'AI consulting services',
		},
	}
}

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
	return (
		<html>
			<body className={clsx(inter.className, ' scroll')}>
				<div className='min-h-screen  mx-auto flex flex-col   relative '>
					<Image
						src='/phonbg.webp'
						alt='bg'
						fill
						priority
						className=' bg-cover opacity-[5%] '
						sizes='(min-width: 500px) 50vw, 100vw'
					/>

					<Providers>
						<Navbar />
						{children}
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	)
}
