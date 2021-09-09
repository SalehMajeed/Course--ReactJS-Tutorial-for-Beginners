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

	shouldComponentUpdate() {
		console.log('Lifecycle_a shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProp, prevState) {
		console.log('lifecycle_a getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate() {
		console.log('lifecycle_a componentDidUpdate');
	}

	change_state = () => {
		this.setState({
			name: 'Coder',
		});
	};

	render() {
		console.log('Lifecycle_a render');
		return (
			<div>
				<div>Lifecycle_a</div>
				<button onClick={this.change_state}>Change State</button>
				<LifecycleB />
			</div>
		);
	}
}

export default Lifecycle_a;
