import React, { Component } from 'react';
import ComponentF from './component_f';
import UserContext from './user_context';

class ComponentE extends Component {
    render() {
        console.log("in")
		return (
			<div>
				Component E Context {this.context}
				<ComponentF />
			</div>
		);
	}
}

ComponentE.contextType = UserContext;

export default ComponentE;
