import React from 'react'
import CartaSpeakers from '@/components/Cartaspeakers/CartaSpeakers.jsx'

const lector = [
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
					return <CartaSpeakers key={i} />
				})}
			</div>
		</>
	)
}

export default SpeakersComponent