import React from 'react'
import dynamic from 'next/dynamic'
const SpeakersComponent = dynamic(() => import('@/components/Speakers/SpeakersComponent.jsx'), {
	loading: () => <div className='w-full text-center loader'></div>,
})

const page = () => {
	return <div><SpeakersComponent/></div>
}

export default page
