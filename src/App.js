import { useState, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import Card from './components/Card';
import { diagonalElemIds, maxArrayCoord, maxArrayLength, reverseElemIds } from './constants';
import { mockData } from './data/mockData';
import {
	findDiagonalSiblings,
	findHorizontalSiblings,
	findReverseDiagonalSiblings,
	findVerticalSiblings,
	getStreak,
	restState,
	uniqueRecords,
	updatedStreak,
	winnerImg
} from './utils';

function App() {
	const [ cardState, setCardState ] = useState(mockData);
	const [ animateWin, setAnimateWin ] = useState(false);

	const streakCheck = (changedElem) => {
		const verticalStreak = updatedStreak(getStreak(findVerticalSiblings(changedElem, cardState)), maxArrayLength);

		const horizontalStreak = updatedStreak(
			getStreak(findHorizontalSiblings(changedElem, cardState)),
			maxArrayLength
		);

		const diagonalStreak = diagonalElemIds.includes(changedElem.id)
			? updatedStreak(getStreak(findDiagonalSiblings(cardState)), maxArrayLength)
			: [];

		const reverseDiagonalStreak = reverseElemIds.includes(changedElem.id)
			? updatedStreak(getStreak(findReverseDiagonalSiblings(cardState, maxArrayCoord)), maxArrayLength)
			: [];

		const streakRecords = uniqueRecords([
			...verticalStreak,
			...horizontalStreak,
			...diagonalStreak,
			...reverseDiagonalStreak
		]);

		const restRecords = restState(cardState, streakRecords);

		if (streakRecords.length > 1) {
			setAnimateWin(true);
			setCardState([ ...restRecords, ...streakRecords ].sort((a, b) => (a.id > b.id ? 1 : -1)));
		}
	};

	const toggleCard = (n) => {
		let restElems = cardState.filter((elem) => elem.id !== n);

		let changedElem = cardState.filter((elem) => {
			return elem.id === n;
		})[0];

		changedElem.checked = !changedElem.checked;

		setCardState([ ...restElems, changedElem ].sort((a, b) => (a.id > b.id ? 1 : -1)));

		streakCheck(changedElem);
	};

	return (
		<div className="flex items-center justify-center bg-black h-screen w-full">
			<div className="grid grid-cols-5 grid-rows-5 max-w-screen max-h-screen square">
				{cardState.map((d, idx) => <Card key={idx} toggleCard={toggleCard} {...d} />)}
			</div>
			<Transition appear show={animateWin} as={Fragment}>
				<Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={() => setAnimateWin(false)}>
					<div className="min-h-screen min-w-screen px-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0">
							<Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
						</Transition.Child>

						<span className="inline-block h-screen align-middle" aria-hidden="true">
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-xl rounded-2xl bg-opacity-100 items-center justify-items-center">
								<Dialog.Title className="animate-bounce  text-5xl font-black  leading-6 text-white mb-4">
									<div className="animate-pulse text-shadow">BINGO</div>
								</Dialog.Title>
								<div className="w-full h-full">
									<img src={winnerImg()} alt="title" className="w-full h-full object-cover p-1.5 " />
								</div>
								<div className="mt-2">
									<p className="text-sm text-white">
										Keep playing to get more streaks or refresh to reset the game !
									</p>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
}

export default App;
