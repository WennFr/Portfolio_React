import React from 'react'
import { NavLink } from 'react-router-dom';




const Header = () => {
  return (
    <header>
      <div className="container">

        
     
        <div className='weather'>
          Stockholm: 23<span>C°</span>
        </div>
      
        <nav className="links"> 
          <NavLink className="link" to="/about">Om Mig</NavLink>
          <NavLink className="link" to="/experience">Erfarenhet</NavLink>
          <NavLink className="link" to="/portfolio">Portfolio</NavLink>
          <NavLink className="link" to="/contact"><span>Kontakt</span></NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Header