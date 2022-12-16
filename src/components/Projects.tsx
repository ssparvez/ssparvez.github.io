import React from 'react';
import { techIconLibrary } from '../utils/TechIconLibrary';
import { projectHistory } from '../utils/ProjectHistory';

import './Projects.scss';

export const Projects = () => {

	console.log(techIconLibrary['react']);

	return (
		<section className="projects">
			<h1 className="section-header">Projects</h1>
			<div className="project-list">
				{projectHistory.map(project => {
					return (<div className="project-detail">
						<img src={project.image} alt={project.name} />
						<div className="middle">
							<div className="text" onClick={() => window.open(project.mainURL, "_blank")}>{project.name}</div>
							<div className="description">{project.description}</div>
						</div>
						<i className="devicon-github-original" onClick={() => window.open(project.codeURL, "_blank")}></i>
						<div className="tech-stack">
							{project.techStack.map(tech => <i title={techIconLibrary[tech].name} className={'technology ' + techIconLibrary[tech].devIcon}></i>)}
						</div>
					</div>)
				})}
			</div>
		</section>
	)
}
