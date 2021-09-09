import React, { Component } from 'react';
import Input from './input';

class FocusInput extends Component {
	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	click_handler = () => {
		console.log(this.componentRef.current);
		this.componentRef.current.focus_input();
	};
	render() {
		return (
			<div>
				<Input ref={this.componentRef} />
				<button onClick={this.click_handler}>Focus Input</button>
			</div>
		);
	}
}

export default FocusInput;
