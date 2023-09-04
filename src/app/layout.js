import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from '../components/footer/Foter.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Artificial Intelligence',
	description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
		<html lang='en'> 
			<body className={inter.className}>
				<div className='max-w-[1366px] min-h-screen mx-auto flex flex-col justify-between sm:px-16 px-4 container'>
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
