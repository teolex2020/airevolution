import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const SheduleComponent = ({time, name, title}) => {
  return (
		<div className='flex flex-col md:flex-row  items-center md:text-xl gap-3 mt-3'>
			<span className='text-blue-400 text-sm md:text-lg'>
				start - &nbsp;{time}
			</span>
			<div className='w-10 h-10 relative'>
				<Image
					src='/time.svg'
					alt=''
					fill
					sizes='(min-width: 50px) 50vw, 100vw'
					priority
					className='object-cover '
				/>
			</div>
			{/* <span>1.</span> */}
			<p className='text-white text-center'>{title}</p>
			<Link href='/speakers'>
				{' '}
				<div className='md:text-lg'>
					(<span className='text-sm'>speaker -</span> &nbsp; {name} &nbsp; )
				</div>
			</Link>
		</div>
	)
}

export default SheduleComponent