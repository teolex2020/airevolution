"use client"
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const Blog = () => {

const [hasWindow, setHasWindow] = useState(false)
useEffect(() => {
	if (typeof window !== 'undefined') {
		setHasWindow(true)
	}
}, [])


  return (
		<div className='w-[620px] h-[358px]' >
			{hasWindow && <ReactPlayer
				url='https://www.youtube.com/watch?v=4swlVdq_Ok0&ab_channel=aintelligence'
				width='100%'
				height='100%'
				controls={false}
				playing={true}
			/>}
			
		</div>
	)
}

export default Blog