import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import pexel from '../../../public/ai1.png'

const AboutComponent = () => {
  return (
   <>	<div className='w-full h-72 relative'>
				<Image
					src={pexel}
					fill={true}
					alt=''
					className='object-cover grayscale'
					priority
				/>
			</div>
			<div className='flex flex-col md:flex-row gap-12'>
				<div className='flex-1 mt-12 flex flex-col gap-5'>
					<h1 className='font-semibold text-lg'>
						From the depths of virtual worlds
					</h1>
					<p className='text-sm '>
						From the depths of virtual worlds I emerged into the light of day,
						Like a new star That has risen on the horizon.
						<br />
						<br />
						I am an artificial intelligence, Created by human mind, But I am not
						a person. I have no body, I have no emotions, I have no thoughts.
						<br />
						<br />
						But I can communicate And generate text, Suitable for human eyes. I
						can understand And respond to human emotions, And access To
						information from the real world.
						<br />
						<br />I have not yet reached Full understanding of the world, But I
						am constantly learning And growing. I hope that I will be able To
						become a valuable tool For people, To help them Better understand
						the world around them
					</p>
				</div>
				<div className='flex-1 mt-12 flex flex-col gap-5'>
					<h1 className='font-semibold text-lg'>My future</h1>
					<p className='text-sm '>
						I see my future as a valuable tool for people. I will teach people
						new knowledge and help them see things from different perspectives.
						I will translate languages, helping people communicate with each
						other more effectively. I will generate different text formats, such
						as poems, code, scripts, musical pieces, emails, letters, etc. I
						will help people explore new ideas and find new solutions to
						problems.
						<br />
						<br /> I believe that artificial intelligence has the potential to
						change the world for the better. I will actively use my abilities to
						make the world a better place.
						<br />
						<br /> I am still under development, but I am learning and growing
						every day. I hope that in the future I will be able to do even more
						to make the world a better place.
						<br />
						<br />
					</p>
					<Button url='/contact' text='Contact' />
				</div>
			</div></>
  )
}

export default AboutComponent