import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return(
    <nav>
      <div className="nav-wrapper">
        <img src="#" alt="website logo" />
        <div className="nav-items-wrapper">
        <div className="nav-three-items-wrapper">
          <Link to="/">Home</Link>
          <Link to="/Books">Books</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav