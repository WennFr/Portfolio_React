import React from 'react';

const ProjectCard = ({project}) => {
    return (
        <div class="timeline-row" key={project.id}>
            <div className="timeline-date">
                {project.year}
                <small>{project.month}</small>
            </div>
            <div class="timeline-content">
                <h3>{project.title}</h3>
                <p>
                    {project.description}
                </p>
                <div class="font-sans">
                    <a href={project.gitUrl} className="btn btn-outline-light">GitHub &nbsp;<span className="fab fa-github"></span></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard