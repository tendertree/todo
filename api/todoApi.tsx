import { Todo, Todo as TodoItemProps } from "../domain/Todo";

export function getTodos(): Promise<TodoItemProps[]> {
	return new Promise((resolve) => {
		const todosJson = localStorage.getItem("todoItem");
		if (todosJson === null) {
			resolve([]);
		} else {
			const parsedTodos = JSON.parse(todosJson);
			if (Array.isArray(parsedTodos)) {
				resolve(parsedTodos);
			} else {
				resolve([parsedTodos]);
			}
		}
	});
}
export const addTodo = async (value: string): Promise<TodoItemProps[]> => {
	const todos = await getTodos();
	const newTodo: TodoItemProps = {
		id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
		value,
		status: false,
	};
	todos.push(newTodo);
	localStorage.setItem("todoItem", JSON.stringify(todos));
	return new Promise((resolve) => {
		resolve(todos);
	});
};

export const deleteTodo = async (id: number): Promise<void> => {
	return getTodos().then((todos) => {
		const index = todos.findIndex((t) => t.id === id);
		if (index !== -1) {
			todos.splice(index, 1);
			localStorage.setItem("todoItem", JSON.stringify(todos));
		}
	});
};


export const updateTodo = async (id: number, updatedTodo: Todo): Promise<Todo> => {
	return getTodos().then((todos) => {
		const index = todos.findIndex((t) => t.id === id);
		if (index !== -1) {
			const updatedItem = { ...todos[index], ...updatedTodo };
			todos[index] = updatedItem;
			localStorage.setItem("todoItem", JSON.stringify(todos));
			return updatedItem;
		}
		throw new Error(`Todo with id ${id} not found`);
	});
};
