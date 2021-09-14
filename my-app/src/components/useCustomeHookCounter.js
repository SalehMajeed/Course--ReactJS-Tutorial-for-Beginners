import { useState } from 'react';

function useCustomeHookCounter(initital_count = 0,value) {
	const [count, setCount] = useState(initital_count);

	const increment = () => {
		setCount(prevCount => prevCount + value);
	};

	const decrement = () => {
		setCount(prevCount => prevCount - value);
	};

	const reset = () => {
		setCount(initital_count);
	};

	return [count, increment, decrement, reset];
}

export default useCustomeHookCounter;
