const React = require('react');
const hello = prop => {
	// return <div>Oye {prop.name} From Hello.js</div>;
	console.log(prop.name);
	return React.createElement(
		'div',
		{ id: 'hello', className: 'Dummy-Class' },
		React.createElement('h1', null, `Oye ${prop.name} From Hello.js using React.createElement`)
	);
};

export default hello;
