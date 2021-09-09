import React, { Component } from 'react';

class Lifecycle_b extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'user',
		};

		console.log('Lifecycle_b constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Lifecycle_b getDerivedStateFromProps');
		return null;
	}

	componentDidMount() {
		console.log('Lifecycle_b componentDidMount');
	}

	render() {
		console.log('Lifecycle_b render');
		return <div>Lifecycle_b</div>;
	}
}

export default Lifecycle_b;
