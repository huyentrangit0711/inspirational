import React from 'react';
import './App.css';
import { Weather } from '../components/Weather/Weather';
import { ToDoForm } from '../components/ToDo/ToDoForm';
import { ToDoList } from '../components/ToDo/ToDoList';
import { Quote } from '../components/Quote/Quote';
import { Background } from '../components/Background/Background';
import { useSelector, useDispatch } from 'react-redux';
import {
	addTodos,
	deleteTodo,
	updateStatusTodo,
	todosData,
} from '../features/todo/todoSlice';
function App() {
	// get data todos from store
	const { todos } = useSelector(todosData);
	const dispatch = useDispatch();
	const addToDoHandler = (todo) => {
		dispatch(addTodos(todo));
	};
	const deleteTodoHandler = (id) => {
		dispatch(deleteTodo(id));
	};
	const updateHandler = (id) => {
		dispatch(updateStatusTodo(id));
	};
	return (
		<div className="App">
			<Background />
			<Weather />
			<ToDoForm onAddToDoHandler={addToDoHandler} />
			<ToDoList
				todos={todos}
				onDeleteTodoHandler={deleteTodoHandler}
				onUpdateTodoHandler={updateHandler}
			/>
			<Quote />
		</div>
	);
}

export default App;
