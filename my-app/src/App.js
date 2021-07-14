// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Greet } from './components/greet';
import Classcomponent from './components/welcome';
import Jsx from './components/hello';
import Message from './components/message';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Greet name='Bruce'>For Bruce</Greet>
				<Greet name='Ben'>Kill Bruce</Greet>
				<Classcomponent name='Bruce'>For Bruce</Classcomponent>
				<Classcomponent name='Ben'>Kill Bruce</Classcomponent>
				<Jsx />
				<Message message='User'></Message>
			</div>
		);
	}
}

export default App;
