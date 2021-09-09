import React, { Component } from 'react';

export class RefsDemo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
		this.cbRef = null;
		this.setcbRef = element => {
			this.cbRef = element;
		};
	}

	componentDidMount() {
		if (this.cbRef) {
			this.cbRef.focus();
		}
		// this.inputRef.current.focus();
		console.log(this.inputRef);
	}

	click_handler = () => {
		alert(this.inputRef.current.value);
	};

	render() {
		return (
			<div>
				<input type='text' ref={this.inputRef} />
				<input type='text' ref={this.setcbRef} />
				<button onClick={this.click_handler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
