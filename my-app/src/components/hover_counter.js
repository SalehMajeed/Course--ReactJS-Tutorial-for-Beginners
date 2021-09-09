import React, { Component } from 'react';
import updated_component from './with_counter';

export class HoverCounter extends Component {
	render() {
		const { count, increment_count } = this.props;
		return (
			<div>
				<h2 onMouseOver={increment_count}>Hovered {count} times</h2>
			</div>
		);
	}
}

export default updated_component(HoverCounter);
