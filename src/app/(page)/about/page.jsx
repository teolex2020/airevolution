import React from 'react'
import About from "../../components/About/About"

export const metadata = {
	title: {
		absolute: 'About us',
	},
}

const page = () => {
  return (
		<div className='max-w-3xl flex flex-col mx-auto container gap-3  z-10 py-10'>
			<About/>
		</div>
	)
}

export default page