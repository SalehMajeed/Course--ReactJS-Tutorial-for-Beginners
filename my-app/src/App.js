import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Greet name='bruce' />
				<Welcome name='richard' />
				<Hello name='rock' />
				<Message name='user' />
			</div>
		);
	}
}

export default App;
