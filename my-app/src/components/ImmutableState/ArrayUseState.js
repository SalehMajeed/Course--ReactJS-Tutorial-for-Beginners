import React, { useState } from 'react';

const initState = ['Bruce', 'Wayne'];

const ArrayUseState = () => {
	const [persons, setPersons] = useState(initState);

	const handle_click = () => {
		persons.push('clark');
		persons.push('kent');
		setPersons([...persons]);
	};
	console.log('ArrayUseState Render');
	return (
		<div>
			<button onClick={handle_click}>Click</button>
			{persons.map(person => {
				return <div key={person}>{person}</div>;
			})}
		</div>
	);
};

export default ArrayUseState;
