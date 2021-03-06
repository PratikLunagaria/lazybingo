const Card = ({ title, image, id, checked, streak, toggleCard }) => {
	return (
		<button
			className={`col-span-1 row-span-1 w-full h-full square flex items-center rounded-t-3xl justify-center relative bg-black hover:border-gray-900 ring-inset  ring-4 border-2 lg:ring-8 lg:border-8 border-b-0 border-black ${streak
				? 'ring-green-500'
				: checked ? 'ring-white' : 'ring-transparent'}`}
			onClick={() => {
				if (id !== 13) {
					toggleCard(id);
				}
			}}>
			<div className="w-full h-full shadow-lg rounded-t-3xl">
				<img src={image} alt="title" className="w-full h-full object-cover p-1.5 rounded-t-2xl" />
			</div>
			<div
				className={`w-full h-full absolute inset-0  flex flex-col bg-gradient-to-b from-transparent hover:to-gray-900 justify-end ${streak
					? 'to-green-500'
					: checked ? 'to-gray-800' : 'to-black '}`}>
				<div className="text-xxs font-normal sm:text-xs text-white  text-shadow p-2 xs:text-xxs lg:text-sm xl:text-sm 2xl:text-md leading-none">
					{title}
				</div>
			</div>
		</button>
	);
};

export default Card;
