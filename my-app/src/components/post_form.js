import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userId: '',
			title: '',
			body: '',
		};
	}

	change_handler = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submit_handler = e => {
		e.preventDefault();
		console.log(this.state);
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.state)
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log('error'));
	};

	render() {
		const { userId, title, body } = this.state;
		return (
			<div>
				<form onSubmit={this.submit_handler}>
					<div>
						<input type='text' name='userId' value={userId} onChange={this.change_handler} />
					</div>
					<div>
						<input type='text' name='title' value={title} onChange={this.change_handler} />
					</div>
					<div>
						<input type='text' name='body' value={body} onChange={this.change_handler} />
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
