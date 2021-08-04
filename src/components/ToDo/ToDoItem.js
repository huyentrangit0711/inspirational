import React from 'react';

export const ToDoItem = ({
	todo,
	onUpdateTodoHandler,
	onDeleteTodoHandler,
}) => {
	const updateStatusTodo = (id, status) => {
		onUpdateTodoHandler(id, status);
	};
	const deleteTodo = (id) => {
		onDeleteTodoHandler(id);
	};
	return (
		<div className="surface">
			<div
				className={`surface-blue surface-styles ${
					todo.isDone ? 'entry-done' : ''
				}`}
			>
				<div>{todo.text}</div>
				<div className="button--wrapper">
					<button
						aria-label="Remove"
						className="remove"
						onClick={() => deleteTodo(todo.id)}
					>
						Remove
					</button>
					<button
						aria-label="Done"
						className="done"
						onClick={() => updateStatusTodo(todo.id, todo.isDone)}
					>
						Done
					</button>
				</div>
			</div>
		</div>
	);
};
