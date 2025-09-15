import React from 'react';
import resumePDF from './../assets/resume.pdf';
import './About.scss';

export const About = () => {
	return (
		<section className="about">
			<h1 className="section-header">About Me</h1>
			<div className="content">
				<div id="current-title"><strong>Software Engineer</strong> at <strong>JPMorgan Chase & Co.</strong></div>
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
					<strong>AWS</strong>,
					<strong>Node.js</strong> and
					<strong>Spring Boot</strong>
					<br />
					<br />- Also -
					<br />
					<br />Former Londoner and current New Yorker
					<br />Always supporting Liverpool FC and vibing to music
					<br />
					<br />
				</div>
				<a className="resume-btn" href={resumePDF} target='_blank' rel='noopener noreferrer'>View Résumé</a>
			</div>
		</section >
	)
}
