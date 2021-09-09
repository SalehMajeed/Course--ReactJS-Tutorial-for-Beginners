import React from 'react';

function memo_component({ name }) {
	console.log('Rendering Memo Component');
	return <div>Fragment Demo</div>;
}

export default React.memo(memo_component);
