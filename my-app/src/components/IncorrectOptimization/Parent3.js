import React, { useState } from 'react';
import ChildThree from './Child3';
import Child4 from './Child4';

const ParentThree = ({ newCount, children }) => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('Batman');

	console.log('ParentThree Render');
	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Count = {count}</button>
			<button onClick={() => setName('Wayne')}>Change Name</button>
			{/* <ChildThree name={name}>
				<strong>Hello</strong>
			</ChildThree> */}
			<Child4 name={name} />
		</div>
	);
};

export default ParentThree;
