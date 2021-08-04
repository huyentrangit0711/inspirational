import React, { useState } from 'react';

export const ToDoForm = ({ onAddToDoHandler }) => {
	const [todo, setToDo] = useState('');
	const updateToDo = (event) => {
		setToDo(event.target.value);
	};
	const addToDoHandler = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			onAddToDoHandler(todo);
			setToDo('');
		}
	};
	return (
		<div id="journal" className="surface">
			<h2>What's on your mind today?</h2>
			<form>
				<input
					type="text"
					className="journal-input"
					aria-label="New journal entry"
					value={todo}
					onChange={updateToDo}
					onKeyDown={addToDoHandler}
				/>
			</form>
		</div>
	);
};
