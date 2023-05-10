import { useEffect, useState } from "react";
import BtnCancel from "./BtnCancel";
interface Input {
	msg: string;
	mutation: () => void;
}
const Input = ({ msg, mutation }: Input) => {
	const [message, setMessage] = useState("nothing");
	useEffect(() => {
		return () => { };
	}, []);
	const handleChange = (event) => {
		setMessage(event.target.value);
	};
	const handleSubmit = (event: React.SyntheticEvent): void => {
		event.preventDefault();
		mutation.mutate(message);
		setMessage("");
	};
	return (
		<div className="w-full static">
			<h1 className="relative bottom-10 text-5xl text-white font-display ">To Do. </h1>
			<div className="new-todo sm:w-full">
				<form onSubmit={handleSubmit}>
					<label htmlFor="name" className=" text-2xl">있다가 할일은?</label>
					{/* Added these items into a div in order to align them horizontally */}
					<div className="flex flex-row items-center justify-center mt-10 ">
						<input
							type="text"
							value={message}
							onChange={handleChange}
							name="todo"
							required
							className="mb-6 w-96  bg-gray-100 border border-gray-300 text-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
						<button
							type="submit"
							className=" mx-2 py-2.5 px-5 mr-2 mb-5 text-sm font-medium text-white bg-dark-orange text-gray-900 focus:outline-none rounded-lg  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
						>
							쓰기
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Input;
