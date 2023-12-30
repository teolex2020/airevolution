import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer/Foter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Href from './components/ui/Href.jsx'
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
				<div className='max-w-[1366px]  h-full mx-auto flex flex-col justify-between sm:px-16 px-4 container'>
					<Providers>
						<Navbar />
						<Href />
						{children}
					
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	)
}
