import React from 'react';
import resumePDF from './../assets/resume.pdf';
import './About.scss';

export const About = () => {
	return (
		<section className="about">
			<h1 className="section-header">About Me</h1>
			<div className="content">
				<a href='https://jpmorgan.com' target='_blank' rel='noopener noreferrer'>
					<div id="current-title">
						<strong>Software Engineer </strong>
						<span> at<strong> JPMorgan Chase & Co.</strong></span>
					</div>
				</a>
				<div id="bio">
					<strong>Developer</strong>,
					<strong>Designer</strong>, and
					<strong>Tech Enthusiast</strong>
					<br />Studied
					<strong>Computer Science</strong> at
					<strong>Stony Brook University</strong>
					<br />Proficient in
					<strong>Java</strong>,
					<strong>JavaScript</strong>, and
					<strong>Python</strong>
					<br />Experienced with
					<strong>Spring Boot</strong>,
					<strong>AWS</strong>,
					<strong>Kubernetes</strong> and
					<strong>React</strong>
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
