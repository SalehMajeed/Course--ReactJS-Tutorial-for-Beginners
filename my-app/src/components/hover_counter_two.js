import React, { Component } from 'react';

export class HoverCounterTwo extends Component {
	render() {
		const { count, increment_count } = this.props;
		return (
			<div>
				<h2 onMouseOver={increment_count}>Hover {count} times</h2>
			</div>
		);
	}
}

export default HoverCounterTwo;
