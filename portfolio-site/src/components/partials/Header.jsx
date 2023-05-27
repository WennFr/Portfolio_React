import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utilities/scrollUtilities';
import { useWeatherData } from '../../utilities/weatherAPI';
import { getWeatherIcon } from '../../utilities/weatherIconMapper';

const Header = () => {
  const { weatherData, location } = useWeatherData();
  const { temperature, weatherCode } = weatherData;
  const weatherIcon = getWeatherIcon(weatherCode);

  function headerToggle() {
    var links = document.getElementById("links");
    if (links.style.display === "none") {
      links.style.display = "grid";
    }
    else {
      links.style.display = "none";
    }
  }

  function restoreLinksDisplay() {
    var links = document.getElementById("links");
    var screenWidth = window.innerWidth;
  
    if (screenWidth > 840) {
      links.style.display = "flex";
    }
    if (screenWidth < 840) {
      links.style.display = "none";
    }
  }
  
  window.addEventListener("resize", restoreLinksDisplay);

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
          <button onClick={headerToggle}><i className="fa fa-bars"></i></button>
        </div>
      </div>
    </header>
  )
}

export default Header