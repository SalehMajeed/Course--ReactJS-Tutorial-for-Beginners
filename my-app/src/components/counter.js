import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}
	increment() {
		// this.setState(
		// 	{
		// 		count: this.state.count + 1,
		// 	},
		// 	() => {
		// 		console.log('After async count value', this.state.count);
		// 	}
		// ); // Set State is Asynchronous

		this.setState(prevState => ({
			count: prevState.count + 1,
		}));
		console.log('before async count value', this.state.count);
	}

	incrementFive() {
		for (let i = 0; i < 5; i++) {
			this.increment();
		}
	}

	render() {
		return (
			<div>
				<div>Count - {this.state.count}</div>
				<button onClick={() => this.incrementFive()}>Increment</button>
			</div>
		);
	}
}

export default Counter;
