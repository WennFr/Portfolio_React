import React from 'react'
import ProjectCard from '../partials/ProjectCard'


const Portfolio = () => {

    return (
        <>
            <section id='portfolio' className='portfolio'>
                <div className="container timeline">
                    <h2>Portfolio</h2>
                    <ProjectCard />
                    <div className="timeline-row">
                        <div className="timeline-date">
                            2022<small>Oct</small>
                        </div>
                        <div class="timeline-content">
                        <h3>Projekt</h3>
                            <p>
                                Lorem ipsum
                            </p>
                            <div className="font-sans">
                                <a  className="btn btn-outline-light" target="_blank">GitHub &nbsp;<span className="fab fa-github"></span></a>
                            </div>
                        </div>
                    </div>


                    <div className="timeline-row">
                        <div className="timeline-date">
                            2022<small>Oct</small>
                        </div>
                        <div className="timeline-content">
                        <h3>Projekt</h3>
                            <p>
                                Lorem ipsum
                            </p>
                            <div className="font-sans">
                                <a  className="btn btn-outline-light" >GitHub &nbsp;<span className="fab fa-github"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-row">
                        <div className="timeline-date">
                            2022<small>Oct</small>
                        </div>
                        <div className="timeline-content">
                        <h3>Projekt</h3>
                            <p>
                                Lorem ipsum
                            </p>
                            <div className="font-sans">
                                <a  className="btn btn-outline-light" >GitHub &nbsp;<span className="fab fa-github"></span></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="line"></div>
                </div>

            </section>
        </>
    )

}
export default Portfolio