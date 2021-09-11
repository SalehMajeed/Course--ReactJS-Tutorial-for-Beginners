import React, { Component } from 'react';

class ClassCounterOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			name: 'user',
		};
	}

	componentDidMount() {
		document.title = `Clicked ${this.state.count} times`;
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log('Updating Document titles');
			document.title = `Clicked ${this.state.count} times`;
		}
	}

	render() {
		return (
			<div>
				<input type='text' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
				<button
					onClick={() => {
						// document.title = `Clicked ${this.state.count} times`
						return this.setState({ count: this.state.count + 1 });
					}}>
					Click {this.state.count} times
				</button>
			</div>
		);
	}
}

export default ClassCounterOne;
