import React, { useState, useCallback } from 'react';
import CallBackButton from './callback_button';
import CallBackCount from './callback_count';
import CallbackTitle from './callback_title';

function CallbackParentComponent() {
	const [age, setAge] = useState(20);
	const [salary, setSalary] = useState(100000000);

	const incrementAge = useCallback(() => {
		setAge(age + 1);
	}, [age]);

	const incrementSalary = useCallback(() => {
		setSalary(salary + 100);
	}, [salary]);

	return (
		<div>
			<CallbackTitle />
			<CallBackCount text='Age' count={age} />
			<CallBackButton handle_click={incrementAge}>Increment Age</CallBackButton>
			<CallBackCount text='Salary' count={salary} />
			<CallBackButton handle_click={incrementSalary}>Increment Salary</CallBackButton>
		</div>
	);
}

export default CallbackParentComponent;
