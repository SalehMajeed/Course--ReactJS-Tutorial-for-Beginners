import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
	const [posts, setPosts] = useState({});
	const [id, setId] = useState(1);
	const [idFromButton, setIdFromButton] = useState(1);

	const handle_click = () => {
		setIdFromButton(id);
	};

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
			.then(res => {
				console.log(res);
				setPosts(res.data);
			})
			.catch(err => [console.log(err)]);
	}, [idFromButton]);
	return (
		<div>
			<input type='text' value={id} onChange={e => setId(e.target.value)} />
			<button type='button' onClick={handle_click}>
				Fetch Post
			</button>
			{/* <ul>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul> */}
			<div>{posts.title}</div>
		</div>
	);
}

export default DataFetching;
