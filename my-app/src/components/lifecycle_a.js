import React, { Component } from 'react';
import LifecycleB from './lifecycle_b';

class Lifecycle_a extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'user',
		};

		console.log('Lifecycle_a constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Lifecycle_a getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('Lifecycle_a componentDidMount');
	}

	render() {
		console.log('Lifecycle_a render');
		return (
			<div>
				<div>Lifecycle_a</div>
				<LifecycleB />
			</div>
		);
	}
}

export default Lifecycle_a;
