import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const intial_state = {
	loading: true,
	error: '',
	post: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: '',
			};
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong',
			};
		default:
			return state;
	}
};

function ReducerDataFetching() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [post, setPost] = useState({});

	const [state, dispatch] = useReducer(reducer, intial_state);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts/1')
			.then(res => {
				setLoading(false);
				setPost(res.data);
				setError('');
			})
			.catch(err => {
				console.log('err');
				setLoading(false);
				setPost({});
				setError(err);
			});
	}, []);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts/1')
			.then(res => {
				dispatch({
					type: 'FETCH_SUCCESS',
					payload: res.data,
				});
			})
			.catch(err => {
				dispatch({
					type: 'FETCH_ERROR',
				});
			});
	}, []);

	return (
		<div>
			{state.loading ? 'Loading' : state.post.title}
			{state.error ? state.error : null}
		</div>
	);
}

export default ReducerDataFetching;
