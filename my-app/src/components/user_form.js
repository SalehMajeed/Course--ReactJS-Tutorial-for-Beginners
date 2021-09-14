import React from 'react';
import useInput from './useInput';

function UserForm() {
	const [FirstName, bindFirstName, resetFirstName] = useInput('');
	const [LastName, bindLastName, resetLastName] = useInput('');

	const submit_handler = e => {
		e.preventDefault();
		alert(`Hello ${FirstName} ${LastName}`);
		resetFirstName();
		resetLastName();
	};

	return (
		<div>
			<form onSubmit={submit_handler}>
				<div>
					<label>First Name</label>
					<input type='text' {...bindFirstName} />
				</div>
				<div>
					<label>Last Name</label>
					<input type='text' {...bindLastName} />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default UserForm;
