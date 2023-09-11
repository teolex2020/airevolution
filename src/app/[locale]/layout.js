import './globals.css'
import { Inter, Roboto, Poppins } from 'next/font/google'
import Footer from './components/footer/Foter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Artificial Intelligence',
	description: 'This is the description',
}




export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'uk' }]
}

export default async function RootLayout({ children, params: { locale } }) {
	let messages
	try {
		messages = (await import(`../../../messages/${locale}.json`)).default
	} catch (error) {
		notFound()
	}



	return (
		<html lang={locale}>
			<body className={inter.className}>
				<div className='max-w-[1366px] min-h-screen mx-auto flex flex-col justify-between sm:px-16 px-4 container'>
					<NextIntlClientProvider locale={locale} messages={messages}>
						<Navbar locale={locale} />
						{children}
						<Footer />
					</NextIntlClientProvider>
				</div>
			</body>
		</html>
	)
}
