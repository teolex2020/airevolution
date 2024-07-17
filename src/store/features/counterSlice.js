import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	authUser: false,
	mobileMenu: true,
	popupMenu: false,
	language: `uk`,
	id: '',
	loading: true,
	titletheme: '',
	promptstudy: '',
}

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		Authuser: (state, action) => {
			state.authUser = action.payload
		},
		MobileMenus: (state, action) => {
			state.mobileMenu = !action.payload
		},
		Languages: (state, action) => {
			state.language = action.payload
		},
		PopupMenu: (state, action) => {
			state.popupMenu = !action.payload
			
		},
		Id: (state, action) => {
			state.id = action.payload
		},
		Loading: (state, action) => {
			state.loading = action.payload
		},
		TitleTheme: (state, action) => {
			state.titletheme = action.payload
		},
		PromptStudy: (state, action) => {
			state.promptstudy = action.payload
		},
	},
})

export const {
	Authuser,
	MobileMenus,
	Languages,
	PopupMenu,
	Id,
	Loading,
	TitleTheme,
	PromptStudy,
} = dataSlice.actions
export default dataSlice.reducer
