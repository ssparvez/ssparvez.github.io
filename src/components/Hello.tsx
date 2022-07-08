import React from 'react';
import me from './../assets/me.png';
import resumePDF from './../assets/resume.pdf';
import { HelloText } from './HelloText';


export const Hello = () => {
	return (
		<section className="hello">
			<header className="App-header">
				<span className="title">Shahryar Parvez</span>
				<div className="actions">
					<a href={resumePDF} target='_blank' rel='noopener noreferrer'>Résumé</a>
				</div>
			</header>
			<div className="content">
				<div className="me">
					<img src={me} />
				</div>
				<HelloText />
			</div>
		</section >
	)
}
