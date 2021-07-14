import React, { Component } from 'react';

class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: 'welcome visitor',
		};
	}
    changeMessage() {
        this.setState({
            message:'Good Job'
        })
    }

	render() {
		return (
			<div>
				<h1>Welcome {this.props.message}</h1>
				{this.state.message} <br />
				<button onClick={() => this.changeMessage()}>Click me</button>
			</div>
		);
	}
}

export default Message;
