import React, { useState, useEffect, useRef } from 'react';

function HookTimer() {
	const [timer, setTimer] = useState(0);
	const interval_ref = useRef();

	useEffect(() => {
		interval_ref.current = setInterval(() => {
			setTimer(prevTimer => prevTimer + 1);
		}, 1000);

		return () => {
			clearInterval(interval_ref.current);
		};
	}, []);

	return (
		<div>
			Hook Timer = {timer}
			<button onClick={() => clearInterval(interval_ref.current)}>Clear Timer</button>
		</div>
	);
}

export default HookTimer;
