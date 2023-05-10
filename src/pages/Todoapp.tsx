import { useEffect } from "react";
import About from "../components/About";
import Input from "../components/Input";
import * as api from "../../api/todoApi"
import { Todo as TodoItemProps } from "../../domain/Todo"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TodoList from "../components/TodoList";

const Todoapp = () => {
	const queryClient = useQueryClient();
	useEffect(() => {
		return () => {
			// Remove the scroll event listener when the component unmounts
		};
	}, []);

	const { data, isLoading, isError, error } = useQuery<TodoItemProps, Error>(["getTodo"], api.getTodos, {
		onSuccess: (data) => { //console.log(data); 
			
		},
		select:(data)=>data?.reverse(),
		
	});

	const mutation = useMutation((todo: string) => api.addTodo(todo), {
		onSuccess: () => {
			queryClient.invalidateQueries("getTodo");
		}
	});
	const deleteMutation = useMutation((id:number) => api.deleteTodo(id), {
		onSuccess: () => {
			queryClient.invalidateQueries("getTodo");
		}
	});


	return (
		<div className=" flex flex-col ">
			<About msg={""} />
			<div className="flex justify-center">
			<Input msg={""} mutation={mutation} />
			</div>
			<div className="flex justify-center ">
			<TodoList className="w-full" msg={""} data={data} mutation={deleteMutation} />
			</div>
		</div >
	);
}
export default Todoapp;
