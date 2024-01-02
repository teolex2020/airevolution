import React from 'react'

const page = () => {
  return (
		<div className='max-w-3xl flex flex-col mx-auto container gap-3  z-10 py-10'>
			<h2 className='w-full text-center text-2xl font-bold'>Вітаю !</h2>
			<div>
				<p>
					Мене звати{' '}
					<span className='font-semibold font-serif text-lg'>
						Олександр Теплюк
					</span>{' '}
					, і я пристрасний розробник та популяризатор штучного інтелекту. Я
					автор книги
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://drive.google.com/file/d/1ALcGpSNy9CoeIITp87X0OCMETSntE-JC/view?fbclid=IwAR3Tenh2YWpIdirbwteC5xAzftVb5h9v7gTmc4GkUrn4ALBvijcovQ7xu34'
					>
						&quot;Prompt Engineering: формуй запити правильно&quot;
					</a>
					і володію професійними сертифікатами від
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
					та
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/certificate/CRPXV48EWJLR'
					>
						Prompt Engineering for ChatGPT
					</a>{' '}
					.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>Моя місія</h2>
				<p>
					Як фахівець, що невпинно прагне знань, я глибоко переконаний у
					трансформаційній силі освіти та інновацій. Моя мета - використовувати
					набуті знання та вміння для підтримки та розвитку технологій, які
					відкривають нові можливості та покращують якість життя.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Чому я створив цей додаток?
				</h2>
				<p>
					Моє бажання розширити горизонти освіти через штучний інтелект
					надихнуло мене на створення &quot;Ваш особистий ШІ помічник для
					батьків школярів&quot;. Цей додаток допоможе батькам у навчанні своїх
					дітей, використовуючи новітні інструменти на основі ШІ.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Моя філософія
				</h2>
				<p>
					За допомогою моїх знань у галузі Prompt Engineering та штучного
					інтелекту, я прагну розробляти інтегровані, інтуїтивно зрозумілі та
					ефективні рішення. Я вірю в синергію людського дотику та
					технологічного прогресу, що може кардинально змінити сферу освіти.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Моє бачення
				</h2>
				<p>
					Завдяки своєму досвіду та навичкам, я прагну не лише сприяти розвитку
					сучасних технологій, але й бути частиною спільноти, яка робить ці
					технології доступними для всіх. Разом ми можемо побудувати майбутнє,
					де освіта стане більш адаптивною, персоналізованою та результативною.
				</p>
			</div>
		</div>
	)
}

export default page