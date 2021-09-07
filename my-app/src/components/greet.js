const React = require('react');

const greet = prop => {
	const { name, heroname } = prop;
	console.log(prop.name);
	// return <h1>Oye {prop.name}</h1>;

	console.log(name, heroname);
	return (
		<h1>
			Oye {name} as {heroname}
		</h1>
	);
};

export default greet;
