import React from 'react';
import me from './assets/me.png';
import './App.scss';
import { HelloText } from './components/HelloText';
import resumePDF from './assets/resume.pdf';

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
			<section className="about">
				<h1 className="section-header">About Me</h1>
				<div className="content">
					<div id="bio">
						<strong>Designer</strong>,
						<strong>Developer</strong>, and
						<strong>Tech Enthusiast</strong>
						<br />Studied
						<strong>Computer Science</strong> at
						<strong>Stony Brook University</strong>
						<br />Proficient in
						<strong>Java</strong>,
						<strong>JavaScript</strong>,
						<strong>Python</strong>, and Klingon
						<br />Experience with
						<strong>React</strong>,
						<strong>Angular</strong>,
						<strong>Node.js</strong> and
						<strong>Spring Boot</strong>
						<br />
						<br />- Also -
						<br />
						<br />Former Londoner and current New Yorker
						<br />Always supporting Liverpool FC and jamming to Tame Impala
						<br />
						<br />
					</div>
					<a className="resume-btn" href={resumePDF} target='_blank' rel='noopener noreferrer'>View Resume</a>
				</div>
			</section >
			<section className="projects"></section>
		</div >
	);
}

export default App;
