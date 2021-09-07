const { Component } = require('react');
const React = require('react');

class message extends Component {
	constructor() {
		super();
		this.state = {
			message: 'welcome visitor',
		};
	}

	changeMessage() {
		this.setState({
			message: 'Good job',
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.message} from the message class </h1>
				<button onClick={() => this.changeMessage()}>Submit</button>
			</div>
		);
	}
}

export default message;
