import React from 'react';

function Child4({ name }) {
	const date = new Date();
	console.log('ChildFour Render');

	return (
		<div>
			Hello {name}. it is currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}{' '}
		</div>
	);
}

export default React.memo(Child4);
