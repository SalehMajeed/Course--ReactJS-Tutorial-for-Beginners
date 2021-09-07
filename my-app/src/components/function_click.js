const React = require('react');

function Function_click() {
    function click_handler() {
        console.log('Button Pressed')
    }
	return (
		<div>
			<button onClick={click_handler}>fire click event</button>
		</div>
	);
}

export default Function_click;
