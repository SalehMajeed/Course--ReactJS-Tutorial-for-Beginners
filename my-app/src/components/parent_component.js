import React, { Component } from 'react';
import Child_component from './child_component';

class Parent_component extends Component {
	constructor(props) {
		super(props);

		this.state = {
			paretName: 'Parent',
		};

		this.greetParent = this.greetParent.bind(this);
	}

	greetParent(child_name) {
		alert(`Hello ${this.state.paretName} from ${child_name}`);
	}
	render() {
		return (
			<div>
				<Child_component greet_handler={this.greetParent} />
			</div>
		);
	}
}

export default Parent_component;
