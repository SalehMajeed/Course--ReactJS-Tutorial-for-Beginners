import React, { useEffect, useRef } from 'react';

function HookFocusInput() {
	const input_ref = useRef(null);
	useEffect(() => {
		//focus the input element
		input_ref.current.focus();
	}, []);
	return (
		<div>
			<input type='text' ref={input_ref} />
		</div>
	);
}

export default HookFocusInput;
