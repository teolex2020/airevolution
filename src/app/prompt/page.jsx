import React from 'react'
import dynamic from 'next/dynamic'
const Prompt = dynamic(
	() => import('@/app/components/Prompt/Prompt.jsx'),
	{
		loading: () => <div className='w-full text-center loader'></div>,
	}
)



const page = () => {
  return (
    <div><Prompt/></div>
  )
}

export default page