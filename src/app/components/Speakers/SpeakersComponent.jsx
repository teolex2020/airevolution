'use client'
import React from 'react'
import CartaSpeakers from '@/app/components/Cartaspeakers/CartaSpeakers.jsx'

const lector = [
	{
		name: 'Valerii Iakovenko',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773302/iakovenko_szuxoc.jpg',
		position:
			'Drone Expert у Food and Agriculture Organization of the United Nations (FAO), Co-founder у FarmFleet',
		descriptions:
			'Artificial intelligence for drones in security applications, How Artificial intelligence can enable operations in GPS-denied environments, Consideration of methods of using AI to detect and neutralize unauthorized drones, Assessment of ethical and technological aspects of using AI to control security drones ',
	},
	{
		name: 'Nataliya Stelmakh',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773332/stelmakh_xlmaab.jpg',
		position: ' Business owner',
		descriptions: 'Artificial intelligence (AI) in e-commerce',
	},
	{
		name: 'Maxim Levitskiy',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773311/levitskiy_fhea65.jpg',
		position: 'SymbiotAI CEO',
		descriptions:
			'AI will not take your job, it will be taken by people using AI',
	},
	{
		name: 'Yeva Antonenko',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773281/antonenko_gji64l.jpg',
		position: 'UIP Expert, Political Analyst.',
		descriptions:
			'Philosophical and ethical aspects of the use of artificial intelligence',
	},
	{
		name: 'Timur Shemsedinov',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773508/timur_g6aqin.jpg',
		position:
			'Chief architect at Metarhia. Lecturer at KPI, KSE. CTO at Cypherband',
		descriptions: 'Limits of Using LLMs in Software Development',
	},

	{
		name: 'Oksana Krasovskaya',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773321/oksana_idkdiu.jpg',
		position: 'Expert analyst at the Ukrainian Institute of Politics',
		descriptions:
			'Social aspects of the application of artificial intelligence technologies',
	},
	{
		name: 'Andrii Ozarchuk',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773325/ozarchuk_ebdrlg.jpg',
		position:
			'Сomputer science teacher and a research associate at the STEM Education Department of the Institute of Pedagogy of the National Academy of Pedagogical Sciences of Ukraine',
		descriptions:
			'Generative Artificial Intelligence: Opportunities for Education',
	},
	{
		name: 'Heibovych Artem',
		photouser:
			'https://res.cloudinary.com/dentkbzne/image/upload/v1696773293/huavey_qj4swf.jpg',
		position: 'Huawei',
		descriptions:
			'AI Enabling Intelligent Operations in Telecom, Huawei’s Industrial AI-Powered Quality Inspection Solution, Radio Network Intelligence for Optimal Energy Saving',
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
