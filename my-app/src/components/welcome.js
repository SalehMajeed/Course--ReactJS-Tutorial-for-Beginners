const { Component } = require('react');
const React = require('react');

class Welcome extends Component {
	render() {
		return <h1>Oye {this.props.name} Class Component</h1>;
	}
}

export default Welcome;
