import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API1,
	dangerouslyAllowBrowser: true,
})

export const runtime = 'edge'

export async function POST(req) {
	if (!process.env.NEXT_PUBLIC_OPENAI_API1) {
		throw new Error(
			'The OpenAI API key is not defined in environment variables.'
		)
	}

	try {
		const { messages } = await req.json()

		

		const response = await openai.chat.completions.create({
			model: 'gpt-4-1106-preview',
			stream: true,
			temperature: 0,
			messages,
		})

		// Convert the response into a friendly text-stream

		const stream = OpenAIStream(response)

		// Respond with the stream
		return new StreamingTextResponse(stream)
		// Extract the `prompt` from the body of the request
	} catch (error) {
		console.log('error', error)
		return NextResponse.json('Internal Server Error', error)
	}
}
