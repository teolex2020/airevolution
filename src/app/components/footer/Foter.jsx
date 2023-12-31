import React from 'react'
import Image from 'next/image'

const Footer = () => {
	return (
		<div className='flex py-4  justify-between px-[10%] bg-black/30 h-14'>
			<div>©2023 AI.school.</div>
			<div className='flex flex-row space-x-4 '>
				<a href='https://www.facebook.com/O.Teplyk'>
					<div className=' relative w-5 h-5 sm:w-6 sm:h-6'>
						<Image
							src='/Facebook.svg'
							alt=''
							fill
							priority
							className='object-contain '
						/>
					</div>
				</a>

				<a href='https://www.instagram.com/newtom1983/'>
					<div className='relative  w-5 h-5 sm:w-6 sm:h-6'>
						<Image
							src='/Instagram.svg'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 20px) 50vw, 100vw'
						/>
					</div>
				</a>
				<a href='https://www.tiktok.com/@alexai2023?lang=en'>
					<div className=' relative  w-5 h-5 sm:w-6 sm:h-6'>
						<Image
							src='/TikTok.svg'
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
