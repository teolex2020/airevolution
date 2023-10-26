import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API1,
	dangerouslyAllowBrowser: true,
})

export const runtime = 'edge'



export async function POST(req) {
	// Extract the `prompt` from the body of the request

  const json = await req.json()
	const { messages, prompt, promptMessage } = json

	// console.log('req', prompt)
		const prompts = prompt + ' ' + promptMessage
		
	// Ask OpenAI for a streaming chat completion given the prompt

	const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		stream: true,
		temperature: 0,
		messages: [
			{ role: 'system', content: prompts },
			...messages,
			// {
			// 	role: 'assistant',
			// 	content: 'The Los Angeles Dodgers won the World Series in 2020.',
			// },
		],
	})

	// Convert the response into a friendly text-stream

	const stream = OpenAIStream(response)

	// Respond with the stream
	return new StreamingTextResponse(stream)
}
