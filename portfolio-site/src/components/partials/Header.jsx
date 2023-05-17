import React from 'react'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header>
      <nav class="container">
        <div>
          <Link to="/about">About Me</Link>
        </div>
        <div>
          <Link to="/experience">Experience</Link>
        </div>
        <div>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header