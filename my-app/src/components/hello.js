import React from 'react';

const hello = () => {
	return (
		<div>
			<h1>JSX version</h1>
		</div>
	);

	// return React.createElement(
	// 	'div',
	// 	{ id: 'hello', className: 'dummyClass' },
	// 	React.createElement('h1', null, 'From non JSX version')
	// );
};

export default hello;
