import React from 'react'
import { NavLink } from 'react-router-dom';
import { scrollToSection } from '../../utilities/scrollUtilities';


const Header = () => {
  
  return (
    <header>
      <div className="cont">
        <div className='weather'>
          Stockholm: 23<span>C°</span>
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