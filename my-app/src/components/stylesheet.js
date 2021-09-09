import React from 'react';
import './my_style.css';

function Stylesheet(props) {
	const class_name = props.primary ? 'primary' : '';
	return (
		<div>
			<h1 className={`${class_name} font-xl`}>Stylesheet</h1>
		</div>
	);
}

export default Stylesheet;
