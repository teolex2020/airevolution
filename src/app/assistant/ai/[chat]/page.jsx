import React from 'react'

import dynamic from 'next/dynamic'
const Slug = dynamic(() => import('../../../components/Slug/Slug'), {
	loading: () => (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='loader'></div>
		</div>
	),
})

const page = () => {
	return (
		<div className='h-full elem'>
			<Slug />
		</div>
	)
}

export default page
