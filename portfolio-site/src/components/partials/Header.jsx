import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utilities/scrollUtilities';
import { useWeatherData } from '../../utilities/weatherAPI';
import { getWeatherIcon } from '../../utilities/weatherIconMapper';

const Header = () => {
  const {weatherData, location} = useWeatherData();
  const { temperature, weatherCode } = weatherData;
  const weatherIcon = getWeatherIcon(weatherCode);

  return (
    <header>
      <div className="cont">
        <div className='weather'>
          {temperature ? (
            <>
              {location}: {temperature} <span className="temperature">°C</span>
            </>
          ) : (
            'Loading...'
          )}
          <div className='weather-icon'>
            {weatherIcon}
          </div>
        </div>
        <nav className="links">
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

      </div>
    </header>
  )
}

export default Header