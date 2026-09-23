import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	titleAssist: '',
	promptAssist: '',
}

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		TitleAssist: (state, action) => {
			state.titleAssist = action.payload
		},
		PromptAssist: (state, action) => {
			state.promptAssist = action.payload
		},
	},
})

export const { TitleAssist, PromptAssist } = dataSlice.actions
export default dataSlice.reducer
