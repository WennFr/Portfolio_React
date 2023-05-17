import React from 'react'
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="links"> 
          <NavLink className="link" to="/about">Om Mig</NavLink>
          <NavLink className="link" to="/experience">Erfarenhet</NavLink>
          <NavLink className="link" to="/portfolio">Portfolio</NavLink>
          <NavLink className="link" to="/contact">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header