import React, { useState } from 'react';
import useCustomHook from './CustomHook';

function DocumentHook() {
	const [count, setCount] = useState(0);
	useCustomHook(count);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count - {count}</button>
		</div>
	);
}

export default DocumentHook;
