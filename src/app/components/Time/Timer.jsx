import React from 'react'

const Timer = () => {
   const currentDate = new Date()
   const targetDate = new Date('2023-09-14T16:00:00Z')

const difference = targetDate - currentDate
const days = Math.floor(difference / (1000 * 60 * 60 * 24))
const hours = Math.floor(
	(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
)
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  return (
		<div>
			<div className='bg-[rgba(5,5,5,0.6)] p-10'>
				<span>{days} days</span>
				<span>{hours} hours</span>
				
				<span>{minutes} minutes</span>
				<span>{seconds} seconds</span>
			</div>
		</div>
	)
}

export default Timer