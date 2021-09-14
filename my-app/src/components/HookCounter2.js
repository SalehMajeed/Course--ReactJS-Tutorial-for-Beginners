import React from 'react';
import useCustomeHookCounter from './useCustomeHookCounter';

function HookCounterTwo() {
	const [count, increment, decrement, reset] = useCustomeHookCounter(20,2);

	return (
		<div>
			<h2>Count = {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default HookCounterTwo;
