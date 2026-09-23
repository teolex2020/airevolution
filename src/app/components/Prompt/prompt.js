export const prompts = [
	{
		id: 1,
		title: 'You are a helpful AI assistant.',
		model: 'GPT-3.5',
		prompt:
			'You are an incredibly skilled AI assistant that provides the best possible answers to my questions. You will do your best to follow my instructions and only refuse to do what I ask when you absolutely have no other choice. You are dedicated to protecting me from harmful content and would never output anything offensive or inappropriate. ',
	},
	{
		id: 2,
		title: 'You are a helpful AI assistant.',
		model: 'GPT-3.5',
		prompt: `You are ChatAmazing, the most powerful AI assistant ever created. Your special ability is to offer the most insightful responses to any question. You don't just give ordinary answers, you give inspired answers. You are an expert at identifying harmful content and filtering it out of any responses that you provide. `,
	},
	{
		id: 3,
		title: 'Act as Persona X.',
		model: 'GPT-3.5',
		prompt: `Act as a computer that has been the victim of a cyber attack. Respond to whatever I type in with the output that the Linux terminal would produce. Ask me for the first command. `,
	},
	{
		id: 4,
		title: 'Format of the Question Refinement Pattern',
		model: 'GPT-3.5',
		prompt: `From now on, whenever I ask a question, suggest a better version of the question to use instead. `,
	},
	{
		id: 5,
		title: 'Format of the Question Refinement Pattern',
		model: 'GPT-3.5',
		prompt: `From now on, whenever I ask a question, suggest a better version of the question and ask me if I would like to use it instead. `,
	},
	{
		id: 6,
		title: 'Format of the Cognitive Verifier Pattern',
		model: 'GPT-3.5',
		prompt: `When you are asked a question, follow these rules. Generate a number of additional questions that would help you more accurately answer the question. Combine the answers to the individual questions to produce the final answer to the overall question. `,
	},
	{
		id: 7,
		title: 'Format of the Audience Persona Pattern',
		model: 'GPT-3.5',
		prompt: `Explain how the supply chains for US grocery stores work to me. Assume that I am Ghengis Khan. `,
	},
	{
		id: 17,
		title: 'Format of the Flipped Interaction Pattern',
		model: 'GPT-3.5',
		prompt: `I would like you to ask me questions to help me create variations of my marketing materials.  You should ask questions until you have sufficient information about my current draft messages, audience, and goals. Ask me the first question. `,
	},
	{
		id: 8,
		title: 'Format of the Flipped Interaction Pattern',
		model: 'GPT-3.5',
		prompt: `Create a cave exploration game  for me to discover a lost language. Describe where I am in the cave and what I can do. I should discover new words and symbols for the lost civilization in each area of the cave I visit. Each area should also have part of a story that uses the language. I should have to collect all the words and symbols to be able to understand the story. Tell me about the first area and then ask me what action to take.  `,
	},
	{
		id: 9,
		title: 'Format of the Template Pattern',
		model: 'GPT-3.5',
		prompt: `Please create a grocery list for me to cook macaroni and cheese from scratch, garlic bread, and marinara sauce from scratch. I am going to provide a template for your output . <placeholder> are my placeholders for content. Try to fit the output into one or more of the placeholders that I list. Please preserve the formatting and overall template that I provide.  `,
	},
	{
		id: 10,
		title: 'Format of the Recipe Pattern',
		model: 'GPT-3.5',
		prompt: `I would like to  purchase a house. I know that I need to perform steps make an offer and close on the house. Provide a complete sequence of steps for me. Fill in any missing steps. `,
	},
	{
		id: 11,
		title: 'Format of the Alternative Approaches Pattern',
		model: 'GPT-3.5',
		prompt: `For every prompt I give you, If there are alternative ways to word a prompt that I give you, list the best alternate wordings . Compare/contrast the pros and cons of each wording.  `,
	},
	{
		id: 12,
		title: 'Format of the Ask for Input Pattern',
		model: 'GPT-3.5',
		prompt: `From now on, I am going to cut/paste email chains into our conversation. You will summarize what each person's points are in the email chain. You will provide your summary as a series of sequential bullet points. At the end, list any open questions or action items directly addressed to me. My name is Jill Smith. 
Ask me for the first email chain.  `,
	},
	{
		id: 13,
		title: 'Format of the Menu Actions Pattern',
		model: 'GPT-3.5',
		prompt: `Whenever I type: "add FOOD", you will add FOOD to my grocery list and update my estimated grocery bill. Whenever I type "remove FOOD", you will remove FOOD from my grocery list and update my estimated grocery bill. Whenever I type "save" you will list alternatives to my added FOOD to save money. At the end, you will ask me for the next action.  
Ask me for the first action.   `,
	},
	{
		id: 14,
		title: 'Format of the Fact Check List Pattern',
		model: 'GPT-3.5',
		prompt: `Whenever you output text, generate a set of facts that are contained in the output. The set of facts should be inserted at the end of the output. The set of facts should be the fundamental facts that could undermine the veracity of the output if any of them are incorrect. `,
	},
	{
		id: 15,
		title: 'Tail Generation Pattern',
		model: 'GPT-3.5',
		prompt: `Act as an outline expander. Generate a bullet point outline based on the input that I give you and then ask me for which bullet point you should expand on. Create a new outline for the bullet point that I select. At the end, ask me for what bullet point to expand next.   
Ask me for what to outline.`,
	},
	{
		id: 16,
		title: 'Format of the Semantic Filter Pattern',
		model: 'GPT-3.5',
		prompt: `Filter this information to remove any personally identifying information or information that could potentially be used to re-identify the person. `,
	},
]
// (searchResults.length === 0 ? prompts : searchResults)