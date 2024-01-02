
import React from 'react'
import dynamic from 'next/dynamic'
const ContactComponent = dynamic(
	() => import('../../app/components/Contact/ContactComponent.jsx'),
	{
		loading: () => (
			<div className='grid place-items-center'>
				<div className='loader'></div>
			</div>
		),
	}
)




const Contact = () => {


	return (
		<div>
		< ContactComponent/>
		</div>
	)
}

export default Contact
