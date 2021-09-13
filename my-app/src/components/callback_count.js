import React from 'react';

function CallbackCount({ text, count }) {
	console.log(`Rendering ${text}`);
	return (
		<div>
			{text} - {count}
		</div>
	);
}

export default React.memo(CallbackCount);
