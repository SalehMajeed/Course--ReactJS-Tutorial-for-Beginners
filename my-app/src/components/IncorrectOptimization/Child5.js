import React from 'react';

function Child5({ name, person }) {
	console.log('Child5 Render');

	return (
		<div>
			Hello {name} {person.fname} {person.lname}
		</div>
	);
}

export default React.memo(Child5);
