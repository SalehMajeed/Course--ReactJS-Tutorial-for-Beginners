import React, { Component } from 'react';
import MemoComponent from './memo_component';
import NewPureComponent from './pure_component';
import RegularComponent from './regular_component';

class NewParentComponent extends Component {
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
				<MemoComponent name={this.state.name} />
				{/* <RegularComponent name={this.state.name} />
				<NewPureComponent name={this.state.name} /> */}
			</div>
		);
	}
}

export default NewParentComponent;
