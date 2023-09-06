'use client'
import React from 'react'
import CartaSpeakers from '@/components/Cartaspeakers/CartaSpeakers.jsx'

const lector = [
	{
		name: 'Yeva Antonenko',
		photouser: '/antonenko.jpg',
		position: 'IWP Expert, Political Analyst.',
		descriptions:
			'Philosophical and ethical aspects of the use of artificial intelligence',
	},
	{
		name: 'Andrii Ozarchuk',
		photouser: '/ozarchuk.jpg',
		position:
			'Сomputer science teacher and a research associate at the STEM Education Department of the Institute of Pedagogy of the National Academy of Pedagogical Sciences of Ukraine',
		descriptions:
			'Generative Artificial Intelligence: Opportunities for Education',
	},
	{
		name: 'Artificial Intelligence',
		photouser: '/contact.jpg',
		position: 'AI developer',
		descriptions:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores fdfdfdsfdsfdfff  fdfdfdsfsda dfdafdasfdsa sdfdsfdsf fdfdsfdsaf fdfdsfds',
	},
	{
		name: 'Artificial Intelligence',
		photouser: '/contact.jpg',
		position: 'AI developer',
		descriptions:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores fdfdfdsfdsfdfff  fdfdfdsfsda dfdafdasfdsa sdfdsfdsf fdfdsfdsaf fdfdsfds',
	},
]

const SpeakersComponent = () => {
	return (
		<>
			<div className='w-full text-center text-3xl text-white py-10'>
				Speakers
			</div>
			<div className='flex flex-wrap justify-center gap-5'>
				{lector.map((e, i) => {
					return (
						<CartaSpeakers
							key={i}
							name={e.name}
							photouser={e.photouser}
							position={e.position}
							descriptions={e.descriptions}
						/>
					)
				})}
			</div>
		</>
	)
}

export default SpeakersComponent
