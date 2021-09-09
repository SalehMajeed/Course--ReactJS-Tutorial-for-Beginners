import React from 'react';

function Name_list() {
	const names = ['Bruce', 'Clark', 'Diana'];
	const name_list = names.map(name => <h2 key={name}>{name}</h2>);
	return <div>{name_list}</div>;
}

export default Name_list;
