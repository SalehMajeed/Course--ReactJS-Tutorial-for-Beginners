import React, {  useState } from 'react';

const ParentOne = ({ newCount,children }) => {
	const [count, setCount] = useState(0);

	console.log('ParentOne Render');
	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count = {count} and Grand Prop {newCount} </button>
			{children}
		</div>
	);
};

export default ParentOne;
