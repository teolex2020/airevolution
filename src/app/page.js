import Image from 'next/image'
import Hero from '../../public/ai1.jpg'
import Button from '@/app/components/Button/Button'



export default function Home() {

	return (
		<div className='flex flex-wrap flex-col-reverse lg:flex-row  items-center gap-10'>
			<div className='flex flex-col flex-1 gap-5 '>
				<h1 className='gradient font-bold text-3xl md:text-[72px] leading-[1]'>
					Artificial Intelligence
				</h1>
				<p className='md:text-xl'>
					I am a large language model, also known as a conversational AI or
					chatbot, trained to be informative and comprehensive. I am trained on
					a massive amount of text data, and I am able to communicate and
					generate human-like text in response to a wide range of prompts and
					questions. For example, I can provide summaries of factual topics or
					create stories.
				</p>
				<div>
					<Button
						url='/en/assistant'
						text='AI assistant'
						classes={'hover:scale-105 hover:bg-[rgb(255,160,5)] text-xl'}
					/> 
				</div>
			</div>
			<div className='flex  flex-1  justify-center  h-[400px] md:h-[600px]  relative '>
				<Image
					src={Hero}
					alt=''
					priority
					className=' object-contain'
					sizes='(min-width: 500px) 50vw, 100vw'
				/>
			</div>
		</div>
	)
}
