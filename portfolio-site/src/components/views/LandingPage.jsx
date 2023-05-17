import React from 'react'
import MainImg from '../../assets/images/Facetune_22-04-2023-11-40-23new.jpg'


const LandingPage = () => {

    return (
        <>
            <div className='main-content'>
                <div className='container'>
                    <h1>Frederick Wennborg</h1>
                    <p>.NET student på KYH. </p>
                    <div className='image-container'>
                        <img className='main-img' src={MainImg} alt="Main Image" />
                    </div>


                    {/* <div class="media-links py-3">
                        <a href="" class="btn btn-sm btn-lg btn-success">CV &nbsp;<i class="fa fa-download"></i></a>
                        <a href="" target="_blank" class="btn btn-sm btn-lg btn-light">GitHub &nbsp;<i class="fab fa-github"></i></a>
                        <a href="" target="_blank" class="btn btn-sm btn-lg btn-primary">LinkedIn &nbsp;<i class="fab fa-linkedin"></i></a>
                    </div> */}

                    <div className='button-group'>
                        <a className='button-1'>CV &nbsp;<i class="fa fa-download"></i></a>
                        <a className='button-2'>Kontakt&nbsp;<i class="fas fa-envelope"></i></a>

                    </div>
                </div>
            </div>
        </>
    )

}
export default LandingPage