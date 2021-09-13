import React, { useContext } from 'react';
import { CountContext } from '../App';

function ComponentD() {
	const Count_Context = useContext(CountContext);
	console.log(Count_Context);
	return (
		<div>
			ComponentD - {Count_Context.countState}
			<button onClick={() => Count_Context.countDispatch('increment')}>Increment</button>
			<button onClick={() => Count_Context.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => Count_Context.countDispatch('reset')}>Reset</button>
		</div>
	);
}

export default ComponentD;
