import React from 'react'
import Header from '../partials/Header'
import MainImg from '../../assets/images/Facetune_22-04-2023-11-40-23.jpg'
import LandingPage from './LandingPage'
import About from './About'
import Experience from './Experience'
import CardLine from '../partials/CardLine'
import Portfolio from './Portfolio'
import Reference from './Reference'
import Contact from './Contact'
import Footer from '../partials/Footer'



const Home = () => {

    return (
        <>
            <Header />
            <LandingPage id="landing-page" />
            <About id="about-me" />
            <CardLine />
            <Experience id="experience" />
            <CardLine />
            <Portfolio id="portfolio" />
            <CardLine />
            <Reference id="reference" />
            <CardLine />
            <Contact id="contact" />
            <Footer />
        </>
    )

}
export default Home