import { useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import gsap from "gsap";
import Todoapp from "./pages/Todoapp";
import { Todo as TodoItemProps } from "../domain/Todo";

function App() {

	return (
		<>
			<div className="flex  flex-col justify-center">
				<Todoapp gsap={gsap} />
			</div>
			<div className="absolute text-white left-10 top-14">tendertree</div>
		</>
	);
}

export default App;
