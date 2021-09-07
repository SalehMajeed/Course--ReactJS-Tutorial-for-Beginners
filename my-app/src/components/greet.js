const React = require('react');

const greet = prop => {
	console.log(prop.name);
	return <h1>Oye {prop.name}</h1>;
};

export default greet;
