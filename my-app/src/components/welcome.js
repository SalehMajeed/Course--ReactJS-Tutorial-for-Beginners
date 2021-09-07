const { Component } = require('react');
const React = require('react');

class Welcome extends Component {
	render() {
		const { name, character_name } = this.props;
		// return <h1>Oye {this.props.name} Class Component</h1>;
		return (
			<h1>
				Oye {name} from Class Component as {character_name}
			</h1>
		);
	}
}

export default Welcome;
