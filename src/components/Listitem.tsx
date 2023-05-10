import BtnCancel from "./BtnCancel";
interface Listitem {
	msg: string;
	id: number;
	mutation: any;
}
const Listitem = ({ msg, id, mutation }: Listitem) => {

	return (<div className="rounded-md my-5 mt-5 h-12 px-10 py-10 bg-dark-orange shadow-lg flex flex-row justify-between element">
		<h1 className="fixed sm:relative bottom-5 sm:block text-xl font-bold hover:transform hover:scale-105 text-white ">{msg}</h1>
		<div className="relative bottom-8 left-72 sm:left-9">
			<BtnCancel id={id} mutation={mutation} />
		</div>
	</div>
	);
}
export default Listitem
