import { useState } from 'react';

function useInput(initial_value) {
	const [value, setValue] = useState(initial_value);

	const reset = () => {
		setValue(initial_value);
	};

	const bind = {
		value,
		onChange: e => {
			setValue(e.target.value);
		},
	};

	return [value, bind, reset];
}

export default useInput;
