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
							) : (
								<code {...props} className={className}>
									{children}
								</code>
							)
						},
					}}
				>
					{content}
				</ReactMarkdown>
			</div>
		</div>
	)
}

export default Message