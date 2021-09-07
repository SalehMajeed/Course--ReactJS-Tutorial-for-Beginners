const React = require('react');

function child_component(props) {
	return (
		<div>
			<button onClick={() => props.greet_handler('child')}> Greet Parent</button>
		</div>
	);
}

export default child_component;
