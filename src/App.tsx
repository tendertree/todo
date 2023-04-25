import { useLayoutEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import gsap from "gsap";

function App() {
	const [count, setCount] = useState(0);
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.fromTo(
				"#box",
				{
					backgroundColor: "red",
					scale: 0,
				},
				{
					backgroundColor: "black",
					duration: 1,
					repeat: -1,
					yoyo: true,
					scale: 1,
				}
			);
		});
		return () => ctx.revert();
	}, []);

	return (
		<>
			<h1 className="text-3xl bold text-red-100">hello</h1>
			<div id="box">this is bxo</div>
		</>
	);
}

export default App;
