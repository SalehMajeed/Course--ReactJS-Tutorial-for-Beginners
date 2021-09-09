import React, { Component } from 'react';
import FRInput from './FRinput';

class FRParentInput extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	click_handler = () => {
		this.inputRef.current.focus();
	};

	render() {
		return (
			<div>
				<FRInput ref={this.inputRef} />
				<button onClick={this.click_handler}>Focus Input</button>
			</div>
		);
	}
}

export default FRParentInput;
