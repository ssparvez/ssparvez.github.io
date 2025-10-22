import React from 'react';
import me from './../assets/me.jpeg';
import resumePDF from './../assets/resume.pdf';
import { HelloText } from './HelloText';

import './Landing.scss';


export const Landing = () => {
	return (
		<section className="landing">
			<header className="App-header">
				<span className="title">Shahryar Parvez</span>
				<div className="actions">
					<a href={resumePDF} target='_blank' rel='noopener noreferrer'>Résumé</a>
				</div>
			</header>
			<div className="content">
				<div className="me">
					<img alt="shahryar" src={me} />
				</div>
				<HelloText />
			</div>
			<div className="contact">
				<i className="devicon-github-original" title="GitHub" onClick={() => window.open("https://github.com/ssparvez", "_blank")}></i>
				<i className="devicon-linkedin-plain" title="LinkedIn" onClick={() => window.open("https://linkedin.com/in/ssparvez", "_blank")}></i>
			</div>
		</section>
	)
}
