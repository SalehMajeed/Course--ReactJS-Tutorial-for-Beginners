import React, { useState } from 'react';
import Child5 from './Child5';

const ParentFour = ({ newCount, children }) => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Batman');
	const person = {
		fname: 'Bruce',
		lname: 'Wayne',
	};

	const handle_click = () => {};

	console.log('ParentFour Render');
	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count = {count}</button>
			<button onClick={() => setName('Wayne')}>Change Name</button>
			<Child5 name={name} person={person} handle_click={handle_click} />
		</div>
	);
};

export default ParentFour;
