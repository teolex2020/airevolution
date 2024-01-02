import React from 'react'

const page = () => {
  return (
		<div className='max-w-3xl flex flex-col mx-auto container gap-3  z-10 py-10'>
			<h2 className='w-full text-center text-2xl font-bold'>Вітаю !</h2>
			<div>
				<p>
					Мене звати <span className='font-semibold '>Олександр і Я є</span>{' '}
					розробник та популяризатор штучного інтелекту. Також, Я автор книги
					&#8194;
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://drive.google.com/file/d/1ALcGpSNy9CoeIITp87X0OCMETSntE-JC/view?fbclid=IwAR3Tenh2YWpIdirbwteC5xAzftVb5h9v7gTmc4GkUrn4ALBvijcovQ7xu34'
					>
						&quot;Prompt Engineering: формуй запити правильно&quot;
					</a>
					&#8194;, маю професійні сертифікати &#8194;
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/specialization/certificate/HB8E6Y9XCGJV'
					>
						IBM DevOps and Software Engineering,
					</a>
					&#8194;
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/specialization/certificate/R98L6NFDFPZ6'
					>
						Meta Front-End Developer
					</a>
					,&#8194;
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/specialization/L7QDWQFNAJ98'
					>
						&#8194; AI in Healthcare від Stanford University
					</a>{' '}
					&#8194;
					<a
						className='underline text-blue-300 cursor-pointer'
						href='https://www.coursera.org/account/accomplishments/certificate/CRPXV48EWJLR'
					>
						Prompt Engineering for ChatGPT
					</a>{' '}
					та інші.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>Моя місія</h2>
				<p>
					Я непохитно вірю у трансформаційну силу освіти та інновацій. Моя мета
					- використовувати знання та навички для підтримки та розвитку
					технологій, які відкривають нові можливості та покращують життя.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Чому я створив цей додаток?
				</h2>
				<p>
					Моє бажання розширити горизонти освіти через штучний інтелект
					надихнуло мене на створення додатку - &quot;Ваш особистий ШІ помічник
					для батьків школярів&quot;. Цей інструмент допоможе батькам у навчанні
					дітей за допомогою новітніх ШІ рішень.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Моя філософія
				</h2>
				<p>
					Використовуючи мої навички у галузі Prompt Engineering та штучного
					інтелекту, я прагну створити інтегровані та інтуїтивно зрозумілі
					рішення. Я вірю, що синергія людського дотику та технологічного
					прогресу може привести до революційних змін у сфері надання освіти.
				</p>
				<h2 className='w-full text-center text-xl font-bold py-3'>
					Моє бачення
				</h2>
				<p>
					Завдяки моєму досвіду, я прагну не лише сприяти розвитку сучасних
					технологій, але й бути частиною спільноти, що робить ці технології
					доступними для всіх. Разом ми можемо побудувати майбутнє, де освіта є
					адаптивною, персоналізованою та ефективною.
				</p>
			</div>
		</div>
	)
}

export default page