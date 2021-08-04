import React from 'react';
import { ToDoItem } from './ToDoItem';

export const ToDoList = ({
	todos,
	onDeleteTodoHandler,
	onUpdateTodoHandler,
}) => {
	const updateTodoHandler = (id, status) => {
		onUpdateTodoHandler(id, status);
	};
	const deleteHandler = (id) => {
		onDeleteTodoHandler(id);
	};

	return (
		<div id="journal" className="surface">
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<ToDoItem
							todo={todo}
							onUpdateTodoHandler={updateTodoHandler}
							onDeleteTodoHandler={deleteHandler}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};
