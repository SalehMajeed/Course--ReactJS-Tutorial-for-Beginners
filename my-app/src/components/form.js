import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			comments: '',
			topic: 'react',
		};
	}

	handle_username_change = event => {
		this.setState({ username: event.target.value });
	};

	handle_comment_change = event => {
		this.setState({
			comments: event.target.value,
		});
	};

	handle_topic_change = event => {
		this.setState({
			topic: event.target.value,
		});
	};

	handle_submit = event => {
		event.preventDefault();
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
	};

	render() {
		return (
			<form onSubmit={this.handle_submit}>
				<div>
					<label>Username</label>
					<input type='text' value={this.state.username} onChange={this.handle_username_change} />
				</div>
				<div>
					<label>Comments</label>
					<textarea value={this.state.comments} onChange={this.handle_comment_change}></textarea>
				</div>
				<div>
					<label>Topic</label>
					<select value={this.state.topic} onChange={this.handle_topic_change}>
						<option value='react'>React</option>
						<option value='angular'>Angular</option>
						<option value='vue'>Vue</option>
					</select>
				</div>
				<button type='submit'>submit</button>
			</form>
		);
	}
}

export default Form;
