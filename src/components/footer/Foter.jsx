import React from 'react'
import Image from 'next/image'

const Footer = () => {
	return (
		<div className='py-4 text-center flex justify-between'>
			<div>©2023 AI-revolution.</div>
			<div className='flex space-x-6'>
				<a href='https://www.facebook.com/O.Teplyk'>
					<div className='hidden md:flex flex-1 relative w-6 h-6'>
						<Image
							src='/Facebook.svg'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 500px) 50vw, 100vw'
						/>
					</div>
				</a>
				<a href='https://www.instagram.com/newtom1983/'>
					<div className='hidden md:flex flex-1 relative w-6 h-6'>
						<Image
							src='/Instagram.svg'
							alt=''
							fill
							priority
							className='object-contain '
							sizes='(min-width: 500px) 50vw, 100vw'
						/>
					</div>
				</a>
				<a href='https://www.tiktok.com/@alexai2023?lang=en'>
					<div className='hidden md:flex flex-1 relative w-6 h-6'>
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
