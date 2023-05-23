import React, { useEffect, useState } from 'react';
import ProjectCard from '../partials/ProjectCard'


const Portfolio = () => {
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetchProjects();
    }, []);


    const fetchProjects = async () => {
        try {
            const response = await fetch('https://projectinformationapi20230523115001.azurewebsites.net/api/project');
            if (response.ok) {
                const data = await response.json();
                setProjects(data);
            } else {
                throw new Error('Error fetching projects');
            }
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container timeline">
                    <h2>Portfolio</h2>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    <div className="line"></div>
                </div>
            </section>
        </>
    )

}
export default Portfolio