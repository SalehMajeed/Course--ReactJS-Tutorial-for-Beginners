import React, { useState, useEffect } from 'react';

function IntervalCounter() {
	const [count, setCount] = useState(0);

	const tick = () => {
		setCount(prevCount => prevCount + 1);
	};

	useEffect(() => {
		function doSomething() {
			console.log(count);
		}

		doSomething();
		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		};
	}, [count]);

	return <div>{count}</div>;
}

export default IntervalCounter;
