import React from 'react'

import dynamic from 'next/dynamic'
const Slug = dynamic(() => import('../../../components/Slug/Slug'), {
	loading: () => (
		<div className='grid place-items-center'>
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
