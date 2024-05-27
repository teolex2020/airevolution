import React from 'react'
import Image from 'next/image'

const Footer = () => {
	return (
		<div className='flex py-2  justify-between px-[10%]  h-14 items-center'>
			<div className='text-sm'>©2023 AI for business</div>
			<div className='flex flex-row space-x-4 '>
				<a href='https://www.facebook.com/O.Teplyk'>
					<div className=' relative w-8 h-8 sm:w-10 sm:h-10 '>
						<Image
							src='/facebook1.webp'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 20px) 50vw, 100vw'
						/>
					</div>
				</a>

				<a href='https://www.linkedin.com/in/alexander-tepliuk-448485161/'>
					<div className='relative  w-8 h-8 sm:w-10 sm:h-10 '>
						<Image
							src='/linkedin1.webp'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 20px) 50vw, 100vw'
						/>
					</div>
				</a>
				<a href='https://www.youtube.com/channel/UCyNQ2sIQjmosBFfa-tbT42g'>
					<div className=' relative  w-8 h-8 sm:w-10 sm:h-10 '>
						<Image
							src='/youtube1.webp'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 500px) 50vw, 100vw'
						/>
					</div>
				</a>
			</div>
		</div>
	)
}

export default Footer
