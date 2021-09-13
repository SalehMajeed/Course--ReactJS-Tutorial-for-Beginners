import React, { useReducer } from 'react';

const initial_state = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initial_state;
		default:
			return state;
	}
};

function ReduceCounterThree() {
	const [count, dispatch] = useReducer(reducer, initial_state);
	const [count2, dispatch2] = useReducer(reducer, initial_state);

	return (
		<div>
			<div>
				<div>Count - {count}</div>
				<button onClick={() => dispatch('increment')}>Increment</button>
				<button onClick={() => dispatch('decrement')}>Decrement</button>
				<button onClick={() => dispatch('reset')}>Reset</button>
			</div>

			<div>
				<div>Count - {count2}</div>
				<button onClick={() => dispatch2('increment')}>Increment</button>
				<button onClick={() => dispatch2('decrement')}>Decrement</button>
				<button onClick={() => dispatch2('reset')}>Reset</button>
			</div>
		</div>
	);
}

export default ReduceCounterThree;
