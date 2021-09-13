import React, { useState, useMemo } from 'react';

function MemoCounter() {
	const [counterOne, setCounterOne] = useState(0);
	const [counterTwo, setCounterTwo] = useState(0);

	const increment_one = () => {
		setCounterOne(counterOne + 1);
	};

	const increment_two = () => {
		setCounterTwo(counterTwo + 1);
	};

	const is_even = useMemo(() => {
		let i = 0;
		while (i < 2000000000) {
			i++;
		}
		return counterOne % 2 == 0;
	}, [counterOne]);

	return (
		<div>
			<div>
				<button onClick={increment_one}>Count One - {counterOne}</button>
				<span>{is_even ? 'Even' : 'Odd'}</span>
			</div>

			<div>
				<button onClick={increment_two}>Count Two - {counterTwo}</button>
			</div>
		</div>
	);
}

export default MemoCounter;
