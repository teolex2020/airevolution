import OpenAI from 'openai'

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API,
	dangerouslyAllowBrowser: true,
})

export const fetchGptAnswer = async (
	setMessages,
	messages,
	setAnswer,
	setLoader
) => {
	
	try {
		const res = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: messages,
			temperature: 0,
		})

		const answer = res.choices[0].message.content
    setAnswer(answer)
		setMessages((prevMessages) => [
			...prevMessages,
			{ role: 'assistant', content: answer },
		])

		 
		 setLoader(false)


		return answer
	} catch (err) {
		console.error('Error occurred:', err)
		throw err
	}
}
