import React from 'react';
import './App.scss';
import { Landing } from './components/Landing';
import { About } from './components/About';
import { Projects } from './components/Projects';

function App() {

	return (
		<div className="App">
			<Landing />
			<About />
			<Projects />
		</div >
	);
}

export default App;
