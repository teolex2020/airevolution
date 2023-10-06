import React from 'react'

import Link from 'next/link'

const Button = ({ text, url, classes }) => {
	return (
		<Link href={url}>
			<button
				className={` p-2 cursor-pointer bg-[rgb(255,144,0)] border-none rounded-md w-fit text-black font-semibold ${classes}`}
			>
			
			
				{text}
			</button>
		</Link>
	)
}

export default Button
