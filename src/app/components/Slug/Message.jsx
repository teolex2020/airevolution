import React from 'react'

const Message = ({ role, content, assis, user }) => {
	return (
		<div className='mb-5'>
			<div className=''>
				{role === 'user' ? (
					<p className='text-green-600'>{user.email}</p>
				) : (
					<p className='text-[#ff9000]'>{assis ? assis : 'Assistant'}</p>
				)}
			</div>
			<div>{content}</div>
		</div>
	)
}

export default Message