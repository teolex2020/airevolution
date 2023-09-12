'use client'
import React from 'react'
import CartaSpeakers from '@/app/[locale]/components/Cartaspeakers/CartaSpeakers.jsx'

const lector = [
	{
		name: 'Valerii Iakovenko',
		photouser: '/iakovenko.jpg',
		position:
			'Drone Expert у Food and Agriculture Organization of the United Nations (FAO), Co-founder у FarmFleet',
		descriptions:
			'Artificial intelligence for drones in security applications, How Artificial intelligence can enable operations in GPS-denied environments, Consideration of methods of using AI to detect and neutralize unauthorized drones, Assessment of ethical and technological aspects of using AI to control security drones ',
	},
	{
		name: 'Nataliya Stelmakh',
		photouser: '/stelmakh.jpg',
		position: ' Business owner',
		descriptions: 'Artificial intelligence (AI) in e-commerce',
	},
	{
		name: 'Maxim Levitskiy',
		photouser: '/levitskiy.jpeg',
		position: 'SymbiotAI CEO',
		descriptions:
			'AI will not take your job, it will be taken by people using AI',
	},
	{
		name: 'Yeva Antonenko',
		photouser: '/antonenko.jpg',
		position: 'UIP Expert, Political Analyst.',
		descriptions:
			'Philosophical and ethical aspects of the use of artificial intelligence',
	},
	{
		name: 'Timur Shemsedinov',
		photouser: '/timur.jpg',
		position:
			'Chief architect at Metarhia; Lecturer at KPI, KSE; CTO at Cypherband',
		descriptions: 'Limits of Using LLMs in Software Development',
	},

	{
		name: 'Oksana Krasovskaya',
		photouser: '/oksana.jpg',
		position: 'Expert analyst at the Ukrainian Institute of Politics',
		descriptions:
			'Social aspects of the application of artificial intelligence technologies',
	},
	{
		name: 'Andrii Ozarchuk',
		photouser: '/ozarchuk.jpg',
		position:
			'Сomputer science teacher and a research associate at the STEM Education Department of the Institute of Pedagogy of the National Academy of Pedagogical Sciences of Ukraine',
		descriptions:
			'Generative Artificial Intelligence: Opportunities for Education',
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
