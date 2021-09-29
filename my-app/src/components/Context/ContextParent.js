import React, { useState } from 'react';
import { ChildA, MemoizedChildA } from './ContextChild';

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

function ContextParent() {
	const [count, setCount] = useState(0);

	console.log('ContextParent Render');
	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count {count} </button>
			<CountProvider value={count}>
				{/* <ChildA /> */}
				<MemoizedChildA />
			</CountProvider>
		</div>
	);
}

export default ContextParent;
