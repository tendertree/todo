import { useEffect } from "react";

interface BtnCancel{
	mutation:{mutate:(id:number)=>void};
	id:number;
}
const BtnCancel =  ({ id,mutation }:BtnCancel)=> {


useEffect(() => {
		return () => {
			// Remove the scroll event listener when the component unmounts
		};
	}, []);
const handleClick=() =>{
		mutation.mutate(id);
	}


	return ( <button onClick={handleClick}type="button" className="text-white  w-15 h-15 hover:bg-blue-800  focus:outline-none rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
	
		<img src="/white_btn.png" className="w-10"/>
		</button>
	);
}
export default BtnCancel
