import React from 'react';
import me from './assets/me.png';
import './App.scss';
import { HelloText } from './components/HelloText';

function App() {

	return (
		<div className="App">
			<section className="hello">
				<header className="App-header">
					<span className="title">Shahryar Parvez</span>
				</header>
				<div className="content">
					<div className="me">
						<img src={me} />
					</div>
					<HelloText />
				</div>
			</section>
			<section className="about"></section>
			<section className="projects"></section>
		</div>
	);
}

export default App;
