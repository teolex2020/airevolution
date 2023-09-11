import React from 'react'
import dynamic from 'next/dynamic'
const SponsorsComponents = dynamic(
	() => import('@/app/[locale]/components/Sponsors/SponsorsComponents.jsx'),
	{
		loading: () => <div className='w-full text-center loader'></div>,
	}
)

const page = () => {
	return (
		<div className='md:flex md:space-x-8'>
			<SponsorsComponents/>
		</div>
	)
}

export default page
