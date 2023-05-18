import React from 'react'
import MainImg from '../../assets/images/Facetune_22-04-2023-11-40-23new.jpg'




const LandingPage = () => {

    return (
        <>
            <section className='landing-page'>
                <div className='container'>
                    <h1>Frederick Wennborg</h1>
                    <p>.NET student på KYH. </p>
                    <div className='image-container'>
                        <img className='main-img' src={MainImg} alt="Main Image" />
                    </div>
                    <div className='button-group'>
                        <a className='button-1'>CV &nbsp;<i class="fa fa-download"></i></a>

                        <a className='button-2'>Kontakt&nbsp;<i class="fas fa-envelope"></i></a>
                        
                    </div>
                </div>



            </section>

        </>
    )

}
export default LandingPage