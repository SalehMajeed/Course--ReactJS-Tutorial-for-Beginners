import React, { Component } from 'react';

class User_greeting extends Component {
	constructor(props) {
		super(props);
		this.state = {
			is_logged_in: false,
		};
	}

	// render using short-circuit operator
	render() {
		return (
			<div>
				{this.state.is_logged_in && <div>Hello User</div>}
				{this.state.is_logged_in || <div>Guest</div>}
			</div>
		);
	}

	// render using ternary
	render() {
		return (
			<div>
				<div>Hello user</div>
				{this.state.is_logged_in ? <div>User</div> : <div>Guest</div>}
			</div>
		);
	}

	// render using variable
	render() {
		let message;
		if (this.state.is_logged_in) {
			message = <div>Logged in</div>;
		} else {
			message = <div>Guest</div>;
		}
		return (
			<div>
				<div>Hello User</div>
				{message}
			</div>
		);
	}

	// render using if else
	render() {
		if (this.state.is_logged_in) {
			return (
				<div>
					<div>Hello user</div>
					<div>Logged in</div>
				</div>
			);
		} else {
			return (
				<div>
					<div>Hello user</div>
					<div>Guest</div>
				</div>
			);
		}
	}
}

export default User_greeting;
