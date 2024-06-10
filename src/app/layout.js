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
			images: [
				{
					url: 'https://www.aintelligence.tech/_next/image?url=%2Feducators1.webp&w=384&q=75',
					width: 600,
					height: 600,
				},
			],
			siteName: 'AI consulting services',
			url: 'https://www.aintelligence.tech',
		},
		twitter: {
			title: 'AI consulting services',
			description: 'AI consulting services',
			image: '/aboutme.webp',
		},
		script: [
			{
				type: 'text/javascript',
				innerHTML: `
           window.smartlook||(function(d) {
           var o=smartlook=function(){ o.api.push(arguments)},
					 h=d.getElementsByTagName('head')[0];
           var c=d.createElement('script');
					 o.api=new Array();
					 c.async=true;
					 c.type='text/javascript';
           c.charset='utf-8';
					 c.src='https://web-sdk.smartlook.com/recorder.js';
					 h.appendChild(c);
           })(document);
           smartlook('init', '9fb6e450477f43a7fb25988925c590c0f28c30cb', { region: 'eu' });
        `,
			},
		],
		icons: {
			icon: '/logo.webp',
		},
		type: 'website',
		robots: {
			index: false,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: false,
				noimageindex: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
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
						<Contact />
						<Navbar />
						{children}
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	)
}
