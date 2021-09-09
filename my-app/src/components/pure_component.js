import React, { PureComponent } from 'react';

class Pure_component extends PureComponent {
	render() {
		console.log('In Pure component');

		return <div>Pure Component {this.props.name}</div>;
	}
}

export default Pure_component;
