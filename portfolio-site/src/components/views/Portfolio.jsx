import React from 'react'


const Portfolio = () => {

    return (
        <>
            <section id='portfolio' className='portfolio'>
                <div className="container timeline">
                    <h2>Portfolio</h2>
                    <div class="timeline-row">
                        <div className="timeline-date">
                            2023<small>Mar</small>
                        </div>
                        <div class="timeline-content">
                            <h3>Projekt</h3>
                            <p>
                                Lorem ipsum
                            </p>
                            <div class="font-sans">
                                <a href="#" className="btn btn-outline-light">GitHub &nbsp;<span className="fab fa-github"></span></a>
                            </div>
                        </div>
                    </div>
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