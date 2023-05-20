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
                            <hr className="" />
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
                            <div>
                                <a href="" target="_blank">
                                    <i className="fab fa-linkedin text-gray-800 dark:text-blueGray-300 dark:hover:text-turquoise hover:text-turquoise"></i>
                                </a>
                            </div>
                            <div>
                                <a href="" target="_blank">
                                    <i className="fab fa-github-square text-gray-800 dark:text-blueGray-300 dark:hover:text-turquoise hover:text-turquoise"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )

}
export default Footer












