import React from 'react'
import { NavLink } from 'react-router-dom';



const Footer = () => {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="contact-details">
                        <div class="contact-header">
                            <p>Mina Uppgifter:</p>
                            <hr />
                        </div>
                        <div className="phone">
                            <p>Telefon: </p>
                            <a href="tel:+467985659889"> +46 763200974</a>
                        </div>
                        <div className="mail">
                            <p>E-mail: </p>
                            <a href="mailto:frederick.wennborg@gmail.com">frederick.wennborg@gmail.com</a>
                        </div>
                    </div>
                    <div>
                        <div className="links">
                            <NavLink
                                to="https://www.linkedin.com/in/frederick-wennborg-055624261/"
                                className="media-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i>
                            </NavLink>
                            <NavLink
                                to="https://github.com/WennFr?tab=repositories"
                                className="media-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github-square"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}
export default Footer












