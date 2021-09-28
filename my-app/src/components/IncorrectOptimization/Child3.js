import React from 'react';

function ChildThree({ children, name }) {
	console.log('ChildThree Rendered');
	return (
		<div>
			{children} {name}
		</div>
	);
}

export default React.memo(ChildThree);
