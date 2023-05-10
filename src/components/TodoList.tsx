import { useEffect, useLayoutEffect, useRef } from "react";
import { Todo } from "../../domain/Todo";
import Listitem from "./Listitem";
import gsap from "gsap";
interface TodoListProp {
  msg: string;
  data: Todo[];
  mutation: any;
}

const Todolist = ({ msg, data, mutation }: TodoListProp) => {
 

  useLayoutEffect(() => {
	if(document.querySelector(".element")){
     gsap.from(".element", { y: 20 });
		}
  }, [data]);


  useEffect(() => {
   		
    return () => {
    };
  }, [data]);

  return (
    <div className="w-[300px] sm:w-[900px]">
      {data &&
        data.map((data, index) => {
          return (
            <div key={index}>
              <Listitem msg={data.value} id={data.id} mutation={mutation}  />
            </div>
          );
        })}
    </div>
  );
};
export default Todolist;
