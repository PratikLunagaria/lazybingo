export const findVerticalSiblings = (card, records) => records.filter((elem) => elem.coords[1] === card.coords[1]);

export const findHorizontalSiblings = (card, records) => records.filter((elem) => elem.coords[0] === card.coords[0]);

export const findDiagonalSiblings = (records) => records.filter((elem) => elem.coords[0] === elem.coords[1]);

export const findReverseDiagonalSiblings = (records, maxArrayCoord) => {
	let reverseDiagonalSiblings = [];
	for (let i = 0; i <= maxArrayCoord; i++) {
		reverseDiagonalSiblings.push(
			records.find((elem) => elem.coords[0] === i && elem.coords[1] === maxArrayCoord - i)
		);
	}
	return reverseDiagonalSiblings;
};

export const getStreak = (elemArr) => elemArr.filter((elem) => elem.checked && elem.checked);

export const toggleStreak = (elemArr, bool) => elemArr.map((elem) => ({ ...elem, streak: bool }));

export const updatedStreak = (streak, maxArrayLength) => {
	if (streak.length === maxArrayLength) {
		return toggleStreak(streak, true);
	}
	return toggleStreak(streak, false);
};

export const restState = (state, updatedStreak) => state.filter((elem) => !updatedStreak.some((e) => elem.id === e.id));

export const uniqueRecords = (data) => {
	let unique = [];
	data.forEach((elem) => {
		if (unique.filter((e) => e.id === elem.id).length === 0) {
			if (elem.streak) {
				unique.push(elem);
			}
		}
	});
	return unique;
};
