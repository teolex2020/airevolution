import React from 'react'

const page = () => {
  return (
		<div className='max-w-3xl flex flex-col mx-auto container gap-3  z-10 py-10'>
		
			<h2 className='w-full text-center text-2xl font-bold'>
				Вітаю !
			</h2>
			<div>
				<p>
					Мене звати{' '}
					<span className='font-semibold font-serif text-lg'>
						Теплюк Олександр
					</span>{' '}
					, і я є{' '}
					<span className='font-semibold font-serif text-lg'>
						Artificial Intelligence Ambassador
					</span>{' '}
					з досвідом у цій галузі. Я є автором книги{' '}
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://drive.google.com/file/d/1ALcGpSNy9CoeIITp87X0OCMETSntE-JC/view?fbclid=IwAR3Tenh2YWpIdirbwteC5xAzftVb5h9v7gTmc4GkUrn4ALBvijcovQ7xu34'
					>
						&quot;Prompt Engineering: формуй запити правильно&quot;
					</a>
					та маю професійні сертифікати зі спеціалізації{' '}
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/specialization/certificate/HB8E6Y9XCGJV'
					>
						IBM IBM DevOps and Software Engineering
					</a>{' '}
					,{' '}
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/specialization/certificate/R98L6NFDFPZ6'
					>
						Meta Meta Front-End Developer
					</a>
					,{' '}
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/specialization/L7QDWQFNAJ98'
					>
						AI in Healthcare від Stanford University
					</a>{' '}
					,{' '}
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/certificate/CRPXV48EWJLR'
					>
						Prompt Engineering for ChatGPT
					</a>{' '}
					та інші .
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>Моя місія</h2>
				<p>
					Як фахівець, який завжди прагне до знань, я вірю в потужність освіти
					та інновацій. Моя місія полягає в тому, щоб використовувати мої знання
					та навички для підтримки та розвитку технологій, які можуть покращити
					життя людей.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Чому я створив цей додаток?
				</h2>
				<p>
					Моє бажання розширити можливості освіти та здоров&apos;я через штучний
					інтелект спонукало мене створити &quot;Ваш особистий ШІ помічник для
					батьків школярів&quot;. Цей додаток є кульмінацією моїх знань,
					відображених у моїй книзі та спеціалізації, та моєї пристрасті до
					створення інноваційного середовища навчання.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Моя філософія
				</h2>
				<p>
					Використовуючи мої навички у галузі Prompt Engineering та знання
					штучного інтелекту в охороні здоров&apos;я, я прагну створити
					інтегровані, інтуїтивно зрозумілі та ефективні рішення. Я вірю, що
					правильне поєднання людського дотику та технологічного прогресу може
					привести до революційних змін у способі, яким ми вчимося та турбуємося
					про наше здоров&apos;я.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Моє бачення
				</h2>
				<p>
					З моєю книгою, сертифікацією та глибоким розумінням штучного
					інтелекту, я прагну не тільки підтримувати розвиток сучасних
					технологій, але й бути частиною спільноти, яка робить ці технології
					доступними та корисними для всіх. Разом ми можемо створити майбутнє,
					де освіта та охорона здоров&apos;я є більш адаптивними,
					персоналізованими та ефективними.
				</p>
			</div>
		</div>
	)
}

export default page