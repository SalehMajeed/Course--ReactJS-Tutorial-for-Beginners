import React, { Component } from 'react';

export class ClickCounterTwo extends Component {
    render() {
		const { count, increment_count } = this.props;
		return (
			<div>
				<button onClick={increment_count}>Clicked {count} times</button>
			</div>
		);
	}
}

export default ClickCounterTwo;
