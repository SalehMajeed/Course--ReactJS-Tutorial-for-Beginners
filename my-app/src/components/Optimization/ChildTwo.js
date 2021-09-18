import React from 'react';

function ChildTwo() {
	console.log('ChildTwo Rendered');
	return <div>ChildTwo Component</div>;
}

export default React.memo(ChildTwo);
