import React from 'react'
import Image from 'next/image'

const CartaSpeakers = ({name, photouser, position, descriptions}) => {
	return (
		<div className='border rounded-md w-80 h-fit'>
			<div className=' w-full h-96 relative flex justify-center '>
				<Image
					src={photouser}
					alt=''
					fill
					sizes='(min-width: 500px) 50vw, 100vw'
					priority
					className='object-cover '
				/>
			</div>
			<div className='w-full flex justify-center h-14 text-2xl py-3 font-semibold text-white'>
				{name}
			</div>
			<hr className='opacity-30' />
			<div className='w-full   overflow-hidden  text-center h-12 hover:h-fit text-lg py-3 text-black bg-white font-semibold '>
				{position}
			</div>
			<hr className='opacity-30' />
			<div className='w-full flex justify-center h-20 hover:h-fit overflow-hidden text-lg  text-white  px-3 py-3 text-center'>
				{descriptions}
			</div>
		</div>
	)
}

export default CartaSpeakers
