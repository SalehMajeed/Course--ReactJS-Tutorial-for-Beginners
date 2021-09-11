import React, { Component } from 'react';

class ClassComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment_count = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.increment_count}>Count {this.state.count}</button>
			</div>
		);
	}
}

export default ClassComponent;
