import React from 'react'
import Image from 'next/image'

const CartaSpeakers = () => {
	return (
		<div className='border rounded-md w-96 h-fit'>
			<div className=' w-96 h-80 relative'>
				<Image
					src='/contact.jpg'
					alt=''
					fill
					sizes='(min-width: 500px) 50vw, 100vw'
					priority
					className='object-cover'
				/>
			</div>
			<div className='w-full flex justify-center h-14 text-2xl py-3 font-semibold text-white'>
				Artificial Intelligence
			</div>
			<hr className='opacity-30' />
			<div className='w-full flex justify-center h-14 text-xl py-3'>AI</div>
			<hr className='opacity-30' />
			<div className='w-full flex justify-center h-[120px] overflow-hidden text-sm px-3 py-3'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores
				dicta aliquam et labore hic consequuntur architecto ipsa at
				exercitationem, incidunt, dolorum recusandae quo magnam, ab modi
				praesentium? Nam, maxime!
			</div>
		</div>
	)
}

export default CartaSpeakers
