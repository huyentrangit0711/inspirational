import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	todos: [
		{
			id: 1,
			text: 'Water plants',
			isDone: true,
		},
		{
			id: 2,
			text: 'Climb a V10',
			isDone: false,
		},
		{
			id: 3,
			text: 'Make some beats',
			isDone: true,
		},
	],
};
export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodos: (state, action) => {
			const newTodo = {
				id: Math.floor(Math.random() * 1000),
				text: action.payload,
				isDone: false,
			};
			state.todos.push(newTodo);
		},
		deleteTodo: (state, action) => {
			const id = action.payload;
			const toDoListData = state.todos.filter((todo) => todo.id !== id);
			state.todos = toDoListData;
		},
		updateStatusTodo: (state, action) => {
			const id = action.payload;
			state.todos.forEach((todo) => {
				if (todo.id === id) {
					todo.isDone = !todo.isDone;
				}
			});
		},
	},
});
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const todosData = (state) => state.todos;
export const { addTodos, deleteTodo, updateStatusTodo } = todosSlice.actions;
export default todosSlice.reducer;
