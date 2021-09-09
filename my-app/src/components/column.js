import React from 'react';

function Column() {
	const items = [
		{ id: 1, title: 'Bruce' },
		{ id: 2, title: 'Martha' },
	];
	return (
		<React.Fragment>
			{items.map(item => (
				<React.Fragment key={item.id}>
					<h1>Title</h1>
					<p>{item.title}</p>
				</React.Fragment>
			))}
			<td>Name</td>
			<td>User</td>
		</React.Fragment>
	);
}

export default Column;
