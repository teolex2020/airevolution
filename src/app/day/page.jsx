import React from 'react'
import dynamic from 'next/dynamic'
const Day = dynamic(() => import('@/app/components/Day/Day.jsx'), {
	loading: () => <div className='w-full text-center loader'></div>,
})


const page = () => {
  return (
    <div><Day/></div>
  )
}

export default page