import React, { useState } from 'react';

const initState = {
	fname: 'Bruce',
	lname: 'Wayne',
};

export const ObjectUseState = () => {
	const [person, setPerson] = useState(initState);

	const changeName = e => {
		const newPerson = { ...person };
		newPerson.fname = 'clark';
		newPerson.lname = 'Kent';

		setPerson(newPerson);
	};

	console.log('ObjectUseState Render');
	return (
		<div>
			<button onClick={changeName}>
				{person.fname} {person.lname}
			</button>
		</div>
	);
};
