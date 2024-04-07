import React from 'react'
import MainImg from '../../assets/images/Facetune_22-04-2023-11-40-23new.jpg'
import MainImg2 from '../../assets/images/Facetune_22-04-2023-11-40-23-modified.png'
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utilities/scrollUtilities';



const LandingPage = () => {

    return (
        <>
            <section id='landing-page' className='landing-page'>
                <div className='container'>
                    <h1>Frederick Wennborg</h1>
                    <p>Software Developer</p>
                    <div className='image-container'>
                        <img className='main-img-2' src={MainImg2} alt="Main Image" />
                    </div>
                    <div className='button-group'>
                        <a className='button-1' href={process.env.PUBLIC_URL + '/Frederick_Wennborg_Cv.pdf'} download>CV&nbsp;<i className="fa fa-download"></i></a>
                        <NavLink className="button-2" onClick={() => scrollToSection('contact')} to="#">
                            Kontakt&nbsp;<i className="fas fa-envelope"></i>
                        </NavLink>
                    </div>

                    <div className="next-section">
                        <div>
                            <NavLink className="next-section-btn" onClick={() => scrollToSection('about-me')} to="#">
                                <i className="fas fa-chevron-down"></i>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default LandingPage