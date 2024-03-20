'use client'
import React from 'react'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import imagebg from '../../../../public/imagebg.png'


const StartPage = ({ gentium }) => {
	return (
		<div className='container mx-auto elem bg-blur  relative rounded-xl max-w-[1346px] flex  '>
			{/* <div className='fixed top-0 left-0 right-0 bottom-0 '> 
				<CookieConsent
					location='bottom'
					buttonText='Sure man!!'
					cookieName='myAwesomeCookieName2'
					style={{ background: '#2B373B' }}
					buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
					expires={150}
				>
					This website uses cookies to enhance the user experience.{' '}
					<span style={{ fontSize: '10px' }}>
						This bit of text is smaller :O
					</span>
				</CookieConsent>
			</div> */}

			<div className={`flex flex-col flex-1 p-7 `}>
				<h1
					className={` font-bold text-2xl md:text-[40px]  leading-[1] text-center lg:text-start pb-5 ${gentium}`}
				>
					Empower Your Business with AI-driven Automation
				</h1>
				<p className=' text-center lg:text-start text-[17px] '>
					Welcome to the forefront of innovation where artificial intelligence
					meets enterprise efficiency. Our bespoke AI solutions are designed to
					propel your business into the future of automation. Experience the
					transformative power of AI with services tailored to:
					<br />
					- Streamline Operations: Our smart systems analyze your workflows to
					identify and implement the most efficient automation strategies.
					<br />
					- Enhance Decision-Making: With data-driven insights, we empower you
					to make informed decisions that drive growth and profitability.
					<br />
					- Boost Productivity: Unlock the full potential of your workforce by
					offloading routine tasks to our intelligent automation systems. <br />
					- Secure Competitive Edge: Stay ahead of the curve by adopting
					cutting-edge AI that keeps your services and products at the pinnacle
					of your industry. <br />
					<br />
					Join us in redefining business excellence. Transform your operations,
					ignite innovation, and lead the market with confidence. Step into the
					future—today.
				</p>
				<div className='flex justify-center lg:justify-start z-10 w-full mt-5'>
					<button className='px-20 py-2 border-t-2 border-zinc-700 bg-blur text-white font-bold rounded-full transition-transform transform-gpu hover:translate-x-1 hover:shadow-lg flex items-center gap-5  text-lg'>
						Get Started
						<ArrowLongRightIcon className='h-6 w-8 ' />
					</button>
				</div>
			</div>
			<div className='flex mt-20  lg:flex-1  justify-center w-full h-[250px] md:h-[500px] relative  '>
				<Image
					src={imagebg}
					alt=''
					fill
					priority
					className=' object-contain rounded-lg '
					sizes='(min-width: 500px) 50vw, 100vw'
				/>
			</div>
		</div>
	)
}

export default StartPage
