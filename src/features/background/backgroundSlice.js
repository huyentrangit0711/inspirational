import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	background: {
		alt_description: 'brown grass field during daytime',
		urls: {
			raw: 'https://images.unsplash.com/photo-1587502537815-0c8b5c9ba39a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxMDI0NTh8MXwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNjI3OTYwMjA2&ixlib=rb-1.2.1&q=85',
		},
	},
};
export const backgroundSlice = createSlice({
	name: 'background',
	initialState,
	reducers: {},
});
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const backgroundData = (state) => state.background;
export default backgroundSlice.reducer;
