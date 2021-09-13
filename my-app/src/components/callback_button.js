import React from 'react';

function CallbackButton({ handle_click, children }) {
	console.log('Rendering button - ', children);
	return <button onClick={handle_click}>{children}</button>;
}

export default React.memo(CallbackButton);
