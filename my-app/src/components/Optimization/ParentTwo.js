import React, { useState } from 'react';
import ChildTwo from './ChildTwo';

const ParentTwo = ({ newCount, children }) => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Batman');

	console.log('ParentTwo Render');
	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count = {count}</button>
			<button onClick={() => setName('Wayne')}>Change Name</button>
			<ChildTwo name={name} />
		</div>
	);
};

export default ParentTwo;
