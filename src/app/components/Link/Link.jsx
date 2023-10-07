import React from 'react'

const Link = () => {
  return (
		<div>
			{' '}
			<a
				href='https://www.google.com/url?q=https%3A%2F%2Fus06web.zoom.us%2Fj%2F82458118840%3Fpwd%3DN3BBRFEveEUwbjFLbmtRMXBWd1FuQT09&sa=D&source=calendar&usd=2&usg=AOvVaw1SoTI0YaF9G4p3QQVHqEL6'
				target='_blank'
			>
				{' '}
				<button className=' flex space-x-5 my-10  rounded-md h-14 w-full items-center justify-center bg-[rgb(255,144,0)] md:text-2xl hover:bg-[rgb(212,128,17)] hover:font-bold font-semibold text-black hover:shadow1'>
					<p> GO TO THE CONFERENCE IN ZOOM</p>
				</button>
			</a>
		</div>
	)
}

export default Link