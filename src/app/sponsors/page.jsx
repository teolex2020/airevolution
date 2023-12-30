import React from 'react'

const page = () => {
	return (
		<div className=' flex justify-center items-center container mx-auto flex-col text-center gap-10 mt-24 md:mt-0'>
			<h2 className='text-3xl text-[#ffc439] font-semibold'>
				Ваша допомога має значення
			</h2>
			<div className='max-w-3xl text-lg px-3'>
				Ми віримо, що кожна дитина заслуговує на найкращу освіту та підтримку у
				виконанні домашніх завдань. Наш проект використовує штучний інтелект,
				щоб створювати інтерактивні інструменти та ресурси, які надають дітям
				індивідуальну підтримку та навчання.
				<br />
				Ваші пожертви допоможуть нам розвивати та вдосконалювати наш проект,
				забезпечуючи батькам та дітям доступ до найновітніших технологій та
				навчальних ресурсів. Ваша підтримка дозволить нам розширювати функціонал
				штучного інтелекту, щоб кожна дитина мала можливість отримати
				індивідуальну підтримку та навчання, відповідно до її потреб та
				здібностей.
				<br /> Зробіть свій внесок у майбутнє дітей, які заслуговують на
				найкраще. Ваша пожертва допоможе нам зробити світ кращим для кожної
				дитини, надаючи їм можливість розвиватися та навчатися в комфортному та
				підтримуючому середовищі.
			</div>
			<div className='w-full z-50'>
				<form
					action='https://www.paypal.com/donate'
					method='post'
					target='_top'
				>
					<input type='hidden' name='hosted_button_id' value='G58E7A6NSFEX8' />
					<input
						type='image'
						src='https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif'
						border='0'
						name='submit'
						title='PayPal - The safer, easier way to pay online!'
						alt='Donate with PayPal button'
						className='w-32'
					/>
					<img
						alt=''
						border='0'
						src='https://www.paypal.com/en_US/i/scr/pixel.gif'
						width='2'
						height='2'
					/>
				</form>
			</div>
			<div className='flex flex-col items-center z-10'>
				<a href='https://www.aintelligence.tech/en'>
					{' '}
					<p className=''>
						
						<span className='text-blue-500'>www.aintelligence.tech</span>
					</p>
				</a>

				
			</div>
		</div>
	)
}

export default page
