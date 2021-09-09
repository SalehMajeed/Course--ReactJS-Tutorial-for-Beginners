import React, { Component } from 'react';

class custom_counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: [],
		};
	}

	handler = () => {
		this.setState(
			() => ({ counter: [...this.state.counter, 0] }),
			() => {
				console.log(this.state.counter.length);
			}
		);
	};

	render() {
		return (
			<div>
				<button onClick={this.handler}>{this.state.counter.length}</button>
				<div className='parent'>
					{this.state.counter.map(() => (
						<div className='box'></div>
					))}
				</div>
			</div>
		);
	}
}

export default custom_counter;
