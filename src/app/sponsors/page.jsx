import React from 'react'
import Image from 'next/image'

const page = () => {
	return (
		<div className='md:flex md:space-x-8'>
			<div className='flex  flex-1  justify-center   h-[500px] md:h-[600px]  relative '>
				<Image
					src='/sponsor.jpg'
					alt=''
					fill
					priority
					sizes='(min-width: 500px) 50vw, 100vw'
					className='object-contain '
				/>
			</div>

			<div className='flex flex-1 flex-col'>
				<h2 className='w-full text-center text-2xl py-5 text-white'>Dear Sponsors!</h2>
				We are pleased to welcome you to the sponsors page of our artificial
				intelligence education project. Our project aims to make artificial
				intelligence accessible to everyone, regardless of their financial
				situation or education. We believe that AI has the potential to change
				the world for the better, and we want to help people understand it and
				use it to solve problems. To achieve this, we create free content that
				explains the basics of artificial intelligence, its capabilities, and
				applications.
				<br />
				<br />
				This content is available in a variety of formats, including articles,
				videos, podcasts, and webinars. We understand that creating high-quality
				content requires time and resources. Therefore, we are looking for
				sponsors who can help us in this endeavor. Here are a few ways sponsors
				can help: Funding: Your financial support will help us cover the costs
				of creating and distributing content. Time and talent: You can also
				donate your time and talent to creating content. For example, you could
				write an article, shoot a video, or lead a webinar. We appreciate any
				help you can provide.
				<br />
				<br />
				If you are interested in supporting our project, please contact us. We
				would be happy to discuss with you how your company can help us make
				artificial intelligence accessible to everyone.
				<br />
				<br />
				Thank you for your consideration.
			</div>
		</div>
	)
}

export default page
