"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const Assistant = dynamic(
	() => import('@/app/components/Assistant/Assistant'),
	{
		loading: () => <div className='w-full text-center '></div>,
	}
)



const page = () => {
	

  return (
		<><Assistant/></>
	)
}

export default page