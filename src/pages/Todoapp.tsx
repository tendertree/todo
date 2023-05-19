import { useEffect } from "react";
import About from "../components/About";
import Input from "../components/Input";
import * as api from "../../api/todoApi"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TodoList from "../components/TodoList";
import { Todo, Todo as TodoItemProps } from "../../domain/Todo";



const Todoapp= () => {
	const queryClient = useQueryClient();
	const { data, isLoading, isError, error } = useQuery<TodoItemProps[], Error>(["getTodo"],api.getTodos, {
onSuccess: (data) => { console.log(data);  console.log("this")
			
		},
		select:(data)=>data ,
		
	});

	const mutation = useMutation((todo: string) => api.addTodo(todo), {
		onSuccess: () => {
			queryClient.invalidateQueries(["getTodo"]);
		}
	});
	const deleteMutation = useMutation((id:number) => api.deleteTodo(id), {
		onSuccess: () => {
			queryClient.invalidateQueries(["getTodo"]);
		}
	});



	return (
	<div className=" flex flex-col ">
			<About />
			<div className="flex justify-center">
			<Input mutation={mutation} />
			</div>
			<div className="flex justify-center ">
				{ data !== undefined ?(
			<TodoList   data={data as TodoItemProps[]} mutation={deleteMutation} />):(<div>none</div>)
				}
			</div>
		</div >


	);
}
export default Todoapp;
