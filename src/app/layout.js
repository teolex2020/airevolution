import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer/Foter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Image from 'next/image'
import { Providers } from '../store/provider.jsx'
const inter = Inter({ subsets: ['latin'] })



export async function generateMetadata() {
	return {
		icons: {
			icon: '/favicon-32x32.png',
		},

		title: {
			default: 'AI School',
		},
	}
}

export default function RootLayout({ children }) {
	return (
		<html>
			<body className={inter.className}>
				<div
					className='  elem   '
					style={{
						// use relative position for the parent div
						position: 'relative',
						width: '100%',
						height: '100vh',
					}}
				>
					<Image
						src='/phone.png'
						alt='bg'
						fill={true}
						priority={true}
						className='object-cover opacity-[0.8%] fixed left-0 right-0'
					/>
					<div className='h-full mx-auto flex flex-col justify-between   '>
						<Providers>
							<Navbar />
							<div className='px-[3%] container mx-auto flex flex-col '>
							
								{children}
							</div>

							<Footer />
						</Providers>
					</div>
				</div>
			</body>
		</html>
	)
}
