import React from 'react'
import dynamic from 'next/dynamic'

const Blog = dynamic(() => import('@/app/components/Blog/Blog.jsx'), {
	loading: () => <div className='w-full text-center loader'></div>,
})


const blog = () => {
	return (
		<div>
			<div className='w-full font-semibold text-2xl text-white text-center py-1'>
				<h1>
					Artificial Intelligence: Challenges and Opportunities for Ukraine
				</h1>
			</div>
			<div className=' flex justify-center py-10  '>

        <Blog/>
      </div>

			<div>
				<div>
					&nbsp;&nbsp;&nbsp;Ukrainian Institute of Politics, together with the
					Artificial Intelligence Laboratory and other partners, held a
					conference on September 14, 2023, titled &quot;Artificial
					Intelligence: Challenges and Opportunities for Ukraine.&quot;
					<br />
					&nbsp;&nbsp;&nbsp;This conference was an important event that brought
					together participants and experts from various fields to discuss the
					changes, challenges, and opportunities that artificial intelligence
					offers for Ukraine and the world as a whole in the areas of public
					administration, economy, employment, and the place of humans in
					society.
					<br />
					&nbsp;&nbsp;&nbsp;Moderator of the conference, Oleksandr Teplyk,
					welcomed the participants and explained the purpose of the event. He
					noted that the main reason for holding the conference was the need to
					raise awareness among Ukrainians about the existence and possibilities
					of application and development of artificial intelligence. Oleksandr
					Teplyk noted that very few citizens in Ukraine use artificial
					intelligence-based tools, and this needs to change.
					<br />
					&nbsp;&nbsp;&nbsp;
					<p className='text-white'> Speakers:</p>
					1. Oksana Krasovska (Expert at the Ukrainian Institute of Politics)
					Topic: Social aspects of the application of artificial intelligence
					technologies <br />
					2. Maksym Levitsky (CEO of SymbiotAI) Topic: AI will not take your
					job, it will take the job of the person who uses AI. <br />
					3. Valeriy Yakovenko (Ukrainian entrepreneur, co-founder and managing
					partner of the DronUA group of companies) Topic: Application of AI on
					drones, namely &quot;Artificial intelligence for drones in security
					applications&quot; <br />
					4. Natalia Stelmakh (Ukrainian entrepreneur currently living in the
					United States, co-founder of several startups) Topic: Artificial
					intelligence in e-commerce <br />
					5. Timur Shemshedinov (Metarkhi technology stack architect; lecturer
					at the National Technical University of Ukraine &quot;Igor Sikorsky
					Kyiv Polytechnic Institute&quot; and Kyiv School of Economics; CTO
					Cypherband) Topic: The limits of using LLM in software development{' '}
					<br />
					6. Eva Antonenko (Expert at the Ukrainian Institute of Politics)
					Topic: Philosophical and ethical aspects of artificial intelligence{' '}
					<br />
					7. Andriy Ozarchuk (Geography and Computer Science teacher, research
					associate at the Pedagogical Institute of the National Academy of
					Pedagogical Sciences of Ukraine) Topic: Generative artificial
					intelligence and opportunities for education <br />
					8. Artem Gaybovich (Huawei expert) Topic: Artificial intelligence for
					smart operations in the telecommunications industry; Quality solutions
					based on industrial artificial intelligence from Huawei; Radio network
					intelligence for optimal energy saving. <br /> <br />
					<p className='text-white'> Part 1:</p>
					The Social Impact of AI Oksana Krasovska: Social aspects of the
					application of artificial intelligence technologies Eva Antonenko:
					Philosophical and ethical aspects of artificial intelligence <br />
					<p className='text-white'> Part 2:</p> The Impact of AI on the Economy
					Maksym Levitsky: AI will not take your job, it will take the job of
					the person who uses AI. Natalia Stelmakh: Artificial intelligence in
					e-commerce <br />
					<p className='text-white'> Part 3:</p> The Application of AI in
					Specific Fields Valeriy Yakovenko: Application of AI on drones, namely
					&quot;Artificial intelligence for drones in security
					applications&quot; Timur Shemshedinov: The limits of using LLM in
					software development Andriy Ozarchuk: Generative artificial
					intelligence and opportunities for education Artem Gaybovich:
					Artificial intelligence for smart operations in the telecommunications
					industry; Quality solutions based on industrial artificial
					intelligence from Huawei; Radio network intelligence for optimal
					energy saving. This grouping is just a suggestion, and you can adjust
					it to fit your needs. For example, you may want to group the speakers
					by their profession or industry. You can also add additional text or
					images to the video to make it more informative and engaging.
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default blog
