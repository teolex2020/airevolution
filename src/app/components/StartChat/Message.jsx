import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Bot, User } from 'lucide-react'
import remarkMath from 'remark-math'

const Message = ({ role, content, assis}) => {

 const isAiMessage = role === 'assistant'

	return (
		<div className={`mb-5  flex gap-3 `}>
			<div className={``}>
				{role === 'user' ? (
					<p className='bg-green-500 rounded-xl p-1'>
						<User width={30} height={30} />
					</p>
				) : (
					<p className='bg-blue-500 rounded-xl p-1'>
						<Bot width={30} height={30} />
					</p>
				)}
			</div>
			<div
				className={` p-3  ${!isAiMessage ? 'bg-blur rounded-lg' : ''}  px-2`}
			>
				<ReactMarkdown
					remarkPlugins={[remarkGfm, remarkMath]}
					components={{
						code({ inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || 'language-js')
							return !inline ? (
								<div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg'>
									<SyntaxHighlighter
										{...props}
										PreTag='div'
										language={match[1]}
										style={dark}
										wrapLines={true}
										wrapLongLines={true}
									>
										{String(children).replace(/\n$/, '')}
									</SyntaxHighlighter>
								</div>
							) : (
								<code
									{...props}
									className={`bg-black/10 rounded-lg p-1 ${className}`}
								>
									{children}
								</code>
							)
						},
					}}
				/>
			</div>
		</div>
	)
}

export default Message