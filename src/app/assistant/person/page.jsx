import React from 'react'
import dynamic from 'next/dynamic'
const Person = dynamic(
	() => import('../../components/Person/Person'),
	{
		loading: () => <div className='w-full text-center '></div>,
	}
)

const page = () => {
  return (
    <div><Person/></div>
  )
}

export default page