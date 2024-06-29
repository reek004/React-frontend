import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img src="./image.png" alt="Logo" className="logo" />
      <div className="buttons">
        <button>Join</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
