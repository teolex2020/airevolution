"use client"
import React, {useState} from 'react'
import Image from 'next/image'

const CartaSpeakers = ({name, photouser, position, descriptions}) => {
const[more, setMore]=useState(false)


const most = ()=>{
setMore(!more)
}



	return (
		<div className='border-2 rounded-md w-80 h-fit cursor-pointer hover:border-green-600 hover:shadow1' onClick={() => most()}>
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
			<div
				className={`w-full p-2  overflow-hidden  text-center  ${
					position.length > 35 && more ? 'h-fit' : 'h-16  '
				} text-lg text-black bg-white font-semibold `}
			>
				{position.length < 35 && position
					? position
					: more && position.length > 35
					? `${position}`
					: `${position.slice(0, 29)}`}
				{more || position.length < 35 ? (
					''
				) : (
					<span style={{ color: 'blue', fontSize: '16px' }}>...</span>
				)}
			</div>
			{/* <hr className='opacity-30' />
			<div className='w-full flex justify-center h-20 hover:h-fit overflow-hidden text-lg  text-white  px-3 py-3 text-center'>
				{descriptions}
			</div> */}
		</div>
	)
}

export default CartaSpeakers
