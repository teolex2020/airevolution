import React from 'react'
import dynamic from 'next/dynamic'
const AboutComponent = dynamic(
	() => import('@/components/Aboutcomponent/AboutComponent.jsx'),
	{
		loading: () => <div className='w-full text-center loader'></div>,
	}
)

const About = () => {
	return (
		<div>
		<AboutComponent/>
		</div>
	)
}

export default About
