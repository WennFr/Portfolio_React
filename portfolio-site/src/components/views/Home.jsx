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



const Home = () => {

    return(
        <>
        <Header />
        <LandingPage />
        <About />
        <CardLine />
        <Experience />
        <CardLine />
        <Portfolio />
        <CardLine />
        <Reference />
        <CardLine />
        <Contact />
        </>
    )

}
export default Home