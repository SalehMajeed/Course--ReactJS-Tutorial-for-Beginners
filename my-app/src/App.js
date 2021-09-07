import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Greet name='bruce' heroname='batman' />
				<Welcome name='dianah' character_name='wonder women' />
				<Hello name='rock' />
				<Message name='user' />
				<Counter name=''></Counter>
			</div>
		);
	}
}

export default App;
