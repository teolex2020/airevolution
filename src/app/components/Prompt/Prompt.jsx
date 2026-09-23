'use client'

import React, { useState, useEffect } from 'react'
import { prompts } from './prompt.js'
import Paginate from './PaginationProps.jsx'

const promptsPerPage = 7 // Кількість промтів на кожній сторінці

const Prompt = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		
		setSearchResults(prompts)
	}, [])

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value)
		search(event.target.value)
	}

	const search = (query) => {
		const results = prompts.filter((prompt) => {
			return prompt.prompt.toLowerCase().includes(query.toLowerCase())
		})

		setSearchResults(results)
	}

	const indexOfLastPrompt = currentPage * promptsPerPage
	const indexOfFirstPrompt = indexOfLastPrompt - promptsPerPage
	const currentPrompts = searchResults.slice(
		indexOfFirstPrompt,
		indexOfLastPrompt
	)

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const previousPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const nextPage = () => {
		if (currentPage !== Math.ceil(searchResults.length / promptsPerPage)) {
			setCurrentPage(currentPage + 1)
		}
	}



	return (
		<div className='flex flex-col items-center justify-start container'>
			<div className='max-w-3xl w-full'>
				<input
					type='text'
					placeholder='Search...'
					value={searchTerm}
					onChange={handleSearchChange}
					className='w-full bg-inherit border-2 h-12 my-3 rounded-xl border-[#1e1e1e]  px-2'
				/>
			</div>
			<div className='max-w-3xl flex flex-col gap-2'>
				{currentPrompts.length === 0 ? (
					<div className='p-3 bg-[#1e1e1e] rounded-md text-white'>
						Nothing found
					</div>
				) : (
					currentPrompts.map((e) => {
						return (
							<div
								key={e.id}
								className='flex flex-col gap-2 p-3 bg-[#1e1e1e] rounded-md'
							>
								<h2 className='text-green-700 font-semibold text-xl'>
									{e.title}..
								</h2>
								<p>{e.prompt}</p>
								<span className='bg-[#111111] w-fit px-2 py-1 rounded-lg'>
									{e.model}
								</span>
							</div>
						)
					})
				)}
				<div className=''>
					<Paginate
						postsPerPage={promptsPerPage}
						totalPosts={searchResults.length}
						paginate={paginate}
						previousPage={previousPage}
						nextPage={nextPage}
					/>
				</div>
			</div>
		</div>
	)
}

export default Prompt

