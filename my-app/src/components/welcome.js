import React, { Component } from 'react';

class welcome extends Component {
    render() {
        console.log(this.props)
        return (
			<div>
                <h1>Class Component {this.props.name}</h1>
                {this.props.children}
			</div>
		);
	}
}

export default welcome;
