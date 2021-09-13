import React from 'react';

function CallbackTitle() {
	console.log('Rendering Title');
	return <h2>useCallback Hook</h2>;
}

export default React.memo(CallbackTitle);
