import React from 'react'
const Paginate = ({
	postsPerPage,
	totalPosts,
	paginate,
	previousPage,
	nextPage,
}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i)
	}

	return (
		<div className='flex justify-center'>
			<ul className='flex gap-6'>
				<li onClick={previousPage} className='cursor-pointer'>
					Prev
				</li>
				{pageNumbers.map((number) => (
					<li
						key={number}
						onClick={() => paginate(number)}
						className='cursor-pointer'
					>
						{number}
					</li>
				))}
				<li onClick={nextPage} className='cursor-pointer'>
					Next
				</li>
			</ul>
		</div>
	)
}

export default Paginate
