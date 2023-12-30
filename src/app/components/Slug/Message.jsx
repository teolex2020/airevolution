import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Bot, User } from 'lucide-react'


const Message = ({ role, content, assis}) => {
	return (
		<div className='mb-5 '>
			<div className={``}>
				{role === 'user' ? (
					<User width={30} height={40} />
				) : (
					<Bot width={30} height={40} color='green' />
				)}
			</div>
			<div
				className={`${
					role === 'user' ? ' ' : ''
				} p-3 rounded-md`}
			>
				<Markdown
					remarkPlugins={[remarkGfm]}
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
				</Markdown>
			</div>
		</div>
	)
}

export default Message