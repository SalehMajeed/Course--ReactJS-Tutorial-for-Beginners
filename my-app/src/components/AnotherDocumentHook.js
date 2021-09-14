import React, { useState } from 'react';
import useCustomHook from './CustomHook';

function AnotherDocumentHook() {
	const [count, setCount] = useState(0);
	useCustomHook();

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count - {count}</button>
		</div>
	);
}

export default AnotherDocumentHook;
