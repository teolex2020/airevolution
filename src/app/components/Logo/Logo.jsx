import React from 'react'


const Logo = () => {
	return (
		<div className='flex items-center justify-center gap-2'>
			<span className='text-[rgb(255,255,255)]  text-6xl font-semibold'>
				AI
			</span>

			<span
				className={` mt-5 border-2 rounded-xl border-zinc-400/20   justify-center py-1   text-sm px-3  items-center gap-5 `}
			>
				.school
			</span>
		</div>
	)
}

export default Logo
