import React from 'react';
import './Projects.scss';

export const Projects = () => {

	const projects = [
		{
			name: 'Jotter',
			years: [2020],
			mainURL: 'http://thejotter.xyz',
			codeURL: 'https://github.com/ssparvez/jotter',
			image: 'jotter.png',
			description:
				'A full-stack web app for quickly taking and organizing notes. Built on React with Redux and Node.js with Express integrated with MongoDB.',
			loaded: false
		},
		{
			name: 'Line Tab',
			years: [2019],
			mainURL:
				'https://chrome.google.com/webstore/detail/line-tab/flfjdodphlkeahmbnchjjjkoooahhkio?hl=en-US',
			codeURL: 'https://github.com/ssparvez/line-tab',
			image: 'linetab.png',
			description:
				'A CLI-based new tab Google Chrome extension. Built with Vanilla JS.',
			loaded: false
		},
		{
			name: 'Cryptofy',
			years: [2018],
			image: 'cryptofy.jpg',
			mainURL: 'https://ssparvez.github.io/cryptofy/',
			codeURL: 'https://github.com/ssparvez/cryptofy',
			description:
				'A mobile app that tracks the prices and latest news on top cryptocurrencies with the coinmarketcap API. Built on Ionic with Angular and Firebase.',
			loaded: false
		},
		{
			name: 'Audium',
			years: [2017],
			image: 'audium.png',
			mainURL: 'http://app.audium.io.s3-website.us-east-2.amazonaws.com/',
			codeURL: 'https://github.com/ssparvez/AudiumFrontEnd',
			description:
				'A full-stack web application based on Spotify. It uses Angular 4, Spring Boot and MySQL.',
			loaded: false
		},
		{
			name: 'GeometricVR',
			years: [2017],
			image: 'geometricvr.png',
			mainURL:
				'https://drive.google.com/file/d/1b6D29qBMbOsCPq_k_hg5pFzTj9bmwRWF/view?usp=sharing',
			codeURL: 'https://github.com/ssparvez/geometric-vr',
			description:
				'A virtual reality app that visualizes 3D shapes for iOS/Android. Created in the Unity3D environment with the GoogleVR SDK and behavior scripts written in C#',
			loaded: false
		},
		{
			name: 'PL Data Visualization',
			years: [2016],
			image: 'pldata.png',
			mainURL: 'https://ssparvez.github.io/premier-league-data/',
			codeURL: 'https://github.com/ssparvez/premier-league-data',
			description:
				'An interactive website that visualizes a soccer data set with D3.js and Materialize for the front-end design.',
			loaded: false
		}
	];

	return (
		<section className="projects">
			<h1 className="section-header">Projects</h1>
			<div className="project-list">
				{projects.map(project => {
					return (<div className="project-detail">
						<div>
							{project.name}
						</div>
					</div>)
				})}
			</div>
		</section>
	)
}
