import React from 'react';
import { techStackIconMapper } from '../../utilities/techStackIconMapper';

const ProjectCard = ({ project }) => {
    const techStackIcons = techStackIconMapper(project.techStack);
    return (
        <div className="timeline-row" key={project.id}>
            <div className="timeline-date">
                {project.year}
                <p className='month'>{project.month}</p>
            </div>
            <div className="timeline-content">
                <h3>{project.title}</h3>

            

                <p>
                    {project.description}
                </p>

                <div className="tech-stack-icons">
                    {techStackIcons}
                </div>

                <div className="git-btn">
                    <a href={project.gitUrl} className="btn btn-outline-light" target="_blank">GitHub &nbsp;<span className="fab fa-github"></span></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard