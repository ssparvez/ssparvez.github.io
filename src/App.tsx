import React from 'react';
import './App.scss';
import { Hello } from './components/Hello';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {

	return (
		<div className="App">
			<Hello />
			<About />
			<Projects />
		</div >
	);
}

export default App;
