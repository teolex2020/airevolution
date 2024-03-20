import React from 'react'
import Link from 'next/link'

const Button = ({ text, url, classes, icon }) => {
	return (
		<Link href={url}>
			<button
				className={` mt-5 border-2 rounded-3xl border-zinc-400  hover:font-semibold justify-center py-2 flex space-x-16   duration-300  z-10 text-2xl px-10 min-w-[200px] items-center gap-5 w-full ${classes}`}
			>
				{text} {icon}
			</button>
		</Link>
	)
}

export default Button
