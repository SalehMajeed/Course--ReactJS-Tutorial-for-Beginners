import React, { PureComponent } from 'react';
import NewPureComponent from './pure_component';
import RegularComponent from './regular_component';

class NewParentComponent extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: 'User',
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'User',
			});
		}, 2000);
	}

	render() {
		console.log('************ In Parent component ************');

		return (
			<div>
				<div>Parent Component</div>
				<RegularComponent name={this.state.name} />
				<NewPureComponent name={this.state.name} />
			</div>
		);
	}
}

export default NewParentComponent;
