import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			err: '',
		};
	}
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
				console.log(res);
				this.setState({ posts: res.data });
			})
			.catch(err => {
				console.log(err);
				this.setState({ err: 'Error retreving data' });
			});
	}
	render() {
		const { posts, err } = this.state;
		return (
			<div>
				List of Posts
				{posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null}
				{err ? <div>{err}</div> : null}
			</div>
		);
	}
}

export default PostList;
