import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useTimeoutFn } from 'react-use';

const Card = ({ title, image }) => {
	let [ isShowing, setIsShowing ] = useState(true);
	let [ , , resetIsShowing ] = useTimeoutFn(() => setIsShowing(true), 500);
	return (
		<button
			className="col-span-1 row-span-1 w-full h-full square rounded-2xl flex items-end justify-center relative"
			onClick={() => {
				setIsShowing(false);
				resetIsShowing();
			}}>
			<div className="w-full h-full bg-white shadow-lg">
				<img src={image} alt="title" className="w-full h-full object-cover" />
			</div>
			<div className="w-full h-full absolute inset-0  flex flex-col bg-gradient-to-b from-transparent to-gray-900 justify-end">
				<Transition
					as={Fragment}
					show={isShowing}
					enter="transform transition duration-[400ms]"
					enterFrom="opacity-0 rotate-[-120deg] scale-50"
					enterTo="opacity-100 rotate-0 scale-100"
					leave="transform duration-200 transition ease-in-out"
					leaveFrom="opacity-100 rotate-0 scale-100 "
					leaveTo="opacity-0 scale-95 ">
					<div className="text-white text-xl font-bold text-shadow">{title}</div>
				</Transition>
			</div>
		</button>
	);
};

export default Card;
