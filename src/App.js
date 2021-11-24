import { useState } from 'react';
import Card from './components/Card';
import { maxArrayCoord, maxArrayLength } from './constants';
import { mockData } from './data/mockData';
import {
	findDiagonalSiblings,
	findHorizontalSiblings,
	findReverseDiagonalSiblings,
	findVerticalSiblings,
	getStreak,
	restState,
	uniqueRecords,
	updatedStreak
} from './utils';

function App() {
	const [ cardState, setCardState ] = useState(mockData);

	const streakCheck = (changedElem) => {
		const verticalStreak = updatedStreak(getStreak(findVerticalSiblings(changedElem, cardState)), maxArrayLength);

		const horizontalStreak = updatedStreak(
			getStreak(findHorizontalSiblings(changedElem, cardState)),
			maxArrayLength
		);

		const diagonalStreak = updatedStreak(getStreak(findDiagonalSiblings(cardState)), maxArrayLength);

		const reverseDiagonalStreak = updatedStreak(
			getStreak(findReverseDiagonalSiblings(cardState, maxArrayCoord)),
			maxArrayLength
		);

		const streakRecords = uniqueRecords([
			...verticalStreak,
			...horizontalStreak,
			...diagonalStreak,
			...reverseDiagonalStreak
		]);

		const restRecords = restState(cardState, streakRecords);

		if (streakRecords.length > 1) {
			setCardState([ ...restRecords, ...streakRecords ].sort((a, b) => (a.id > b.id ? 1 : -1)));
		}
	};

	const toggleCard = (n) => {
		let restElems = cardState.filter((elem) => elem.id !== n);

		let changedElem = cardState.filter((elem) => {
			return elem.id === n;
		})[0];

		changedElem.checked = !changedElem.checked;

		setCardState([...restElems, changedElem].sort((a, b) => (a.id > b.id ? 1 : -1)));
		
		streakCheck(changedElem);
	};

	return (
		<div className="flex items-center justify-center bg-black">
			<div className="grid grid-cols-5 grid-rows-5 max-w-screen max-h-screen square">
				{cardState.map((d, idx) => <Card key={idx} toggleCard={toggleCard} {...d} />)}
			</div>
		</div>
	);
}

export default App;
