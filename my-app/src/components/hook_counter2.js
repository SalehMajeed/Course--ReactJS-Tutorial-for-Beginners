import React, { useState } from 'react';

function HookCounter2() {
	const initial_count = 0;
	const [count, setCount] = useState(initial_count);
	const count_by_five = e => {
		for (let i = 0; i < 5; i++) {
			setCount(prevState => prevState + 1);
		}
	};

	return (
		<div>
			Count:{count}
			<button onClick={() => setCount(initial_count)}>Reset</button>
			<button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
			<button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
			<button onClick={count_by_five}>Count By Five</button>
		</div>
	);
}

export default HookCounter2;
