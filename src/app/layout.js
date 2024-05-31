import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer/Foter.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { Providers } from '../store/provider.jsx'
import Contact from './components/Contact/Contact.jsx'
import clsx from 'clsx'
import Script from 'next/script'

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
	}
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

	const description = 'AI consulting services'
  const title = 'AI consulting services'

	return (
		<html>
			<head>
				<title>aintelligence.tech/</title>
				<meta name='robots' content='follow, index' />
				<meta name='description' content={description} />
				<meta property='og:site_name' content='aintelligence.tech/' />
				<meta property='og:url' content='https://www.aintelligence.tech' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={title} />
				<meta name='twitter:description' content={description} />
				<meta name='twitter:title' content={title} />
				<meta name='docsearch:version' content='master' />
				<meta property='og:image' content="https://www.aintelligence.tech/_next/image?url=%2Fstep.webp&w=1080&q=75" />
			</head>
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
