import React from 'react'
import Image from 'next/image'
const page = () => {
	return (
		<div className=' flex justify-center items-center container mx-auto flex-col text-center gap-10 mt-24 md:mt-0'>
			<h2 className='text-3xl text-[#ffc439] font-semibold'>
				Your donation matters
			</h2>
			<div className='max-w-3xl text-lg px-3'>
				Your donation is more than a gift. It is an investment in the future of
				our project. We are always working on improving our project and and add
				new features. Your donation will help us pay for development costs,
				server costs, and other expenses. For example, your donation might help
				Help us: Add a new feature that our users have asked for Improve the
				performance of our website performance of our website Make our project
				more accessible to users in different countries Your donation will help
				us make our project even better. better. Thank you for your support!
			</div>
			<div className='w-full z-50'>
				<form
					action='https://www.paypal.com/donate'
					method='post'
					target='_top'
				>
					<input type='hidden' name='hosted_button_id' value='G58E7A6NSFEX8' />
					<input
						type='image'
						src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif'
						border='0'
						name='submit'
						title='PayPal - The safer, easier way to pay online!'
						alt='Donate with PayPal button'
						className='w-32'
					/>
					<img
						alt=''
						border='0'
						src='https://www.paypal.com/en_US/i/scr/pixel.gif'
						width='2'
						height='2'
					/>
				</form>
			</div>
			<div className='flex flex-col items-center z-10'>
				<a href='https://www.aintelligence.tech/en'>
					{' '}
					<p className=''>
						Looking to add AI to your business? We can help. <br />
						<span className='text-blue-500'>www.aintelligence.tech.</span>
					</p>
				</a>

				<div className='flex space-x-5 mt-3'>
					<a href='https://www.facebook.com/O.Teplyk'>
						<div>
							<Image
								alt='facebook'
								src='/Facebook.svg'
								width={30}
								height={30}
							/>
						</div>
					</a>{' '}
					<a href='https://www.tiktok.com/@alexai2023?lang=en'>
						<div>
							<Image alt='tiktok' src='/TikTok.svg' width={30} height={30} />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default page
