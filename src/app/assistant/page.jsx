
import React from 'react'
import dynamic from 'next/dynamic'
const Assistant = dynamic(
	() => import('../../app/components/Assistant/Assistant'),
	{
		loading: () => (
			<div className='grid place-items-center'>
				<div className='loader'></div>
			</div>
		),
	}
)



const page = () => {
	

  return (
		<><Assistant/></>
	)
}

export default page