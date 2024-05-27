import React from 'react'
import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex flex-col items-center'>
			{' '}
			<div className='  w-14 h-14 relative'>
				<Image
					src='/logo1.webp'
					fill
					alt='logo'
					priority
					sizes='(min-width: 500px) 50vw, 100vw'
					className=' object-cover '
				/>
			</div>
			{/* <p className='text-[13px] absolute -bottom-5'>Home</p> */}
		</div>
	)
}

export default Logo
