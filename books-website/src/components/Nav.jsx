import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.scss'

function Nav() {
  return(
    <nav>
      <div className="nav-wrapper">
        <img src="\src\assets\Adobe Express - file.png" alt="website logo" />
        <div className="nav-items-wrapper">
        <div className="nav-three-items-wrapper">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav