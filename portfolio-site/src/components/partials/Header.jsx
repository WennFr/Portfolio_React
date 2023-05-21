import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utilities/scrollUtilities';
import { useWeatherData } from '../../utilities/weatherAPI';

const Header = () => {
  const weatherData = useWeatherData();

  const { temperature, weatherCode } = weatherData;

  return (
    <header>
      <div className="cont">
        <div className='weather'>
        {temperature ? (
            <>
              Stockholm: {temperature} <span className="temperature">°C</span>
            </>
          ) : (
            'Loading...'
          )}
        {/* <WiDaySunny size={35} color="white" /> */}
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