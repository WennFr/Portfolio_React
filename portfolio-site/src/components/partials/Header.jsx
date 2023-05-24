import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utilities/scrollUtilities';
import { useWeatherData } from '../../utilities/weatherAPI';
import { getWeatherIcon } from '../../utilities/weatherIconMapper';

const Header = () => {
  const { weatherData, location } = useWeatherData();
  const { temperature, weatherCode } = weatherData;
  const weatherIcon = getWeatherIcon(weatherCode);


  function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  useEffect(() => {
  }, []);



  return (
    <header >
      <div className="cont">
        <div className='weather'>
          {temperature ? (
            <>
             <span className='hide'> {location}: &nbsp; </span>  {temperature} <span className="temperature">°C</span>
            </>
          ) : (
            'Loading...'
          )}
          <div className='weather-icon'>
            {weatherIcon}
          </div>
        </div>

        <nav id="links" className="links">
          <NavLink className="link" onClick={() => scrollToSection('about-me')} to="#">
            Om Mig
          </NavLink>
          <NavLink className="link" onClick={() => scrollToSection('experience')} to="#">
            Kunskap
          </NavLink>
          <NavLink className="link" onClick={() => scrollToSection('portfolio')} to="#">
            Portfolio
          </NavLink>
          <NavLink className="link" onClick={() => scrollToSection('reference')} to="#">
            Referenser
          </NavLink>
          <NavLink className="link" onClick={() => scrollToSection('contact')} to="#">
            <span>Kontakt</span>
          </NavLink>
        </nav>
        <div id="toggle-icon" className="toggle-button">
          <button onClick={myFunction}><i className="fa fa-bars"></i></button>
        </div>
      </div>
    </header>
  )
}

export default Header