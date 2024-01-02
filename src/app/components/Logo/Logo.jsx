import React from 'react'
import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex flex-col items-center justify-center relative scale-x-[-1] '>
			<Image
				src='/log.png'
				width={80}
				height={40}
				alt='logo'
				priority
				sizes='(min-width: 500px) 50vw, 100vw'
			/>
		</div>
	)
}

export default Logo
