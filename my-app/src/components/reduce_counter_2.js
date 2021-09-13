import React, { useReducer } from 'react';

const initial_state = {
	firstCounter: 0,
	secondCounter: 10,
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value };
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value };
		case 'reset':
			return initial_state;
		default:
			return state;
	}
};

function ReduceCountTwo() {
	const [count, dispatch] = useReducer(reducer, initial_state);

	return (
		<div>
			<div>Count - {count.firstCounter}</div>
			<div>Count - {count.secondCounter}</div>
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment 2</button>
			<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement 2</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</div>
	);
}

export default ReduceCountTwo;
