import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Umazzz Stitching</h2>
        
        {/* The Menu Button (3 Dots) */}
        <div className="menu-dots" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* The 4 Options - Hidden on mobile until dots are clicked */}
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/creation" onClick={() => setIsOpen(false)}>My Creation</a></li>
          <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><a href="/pricing" onClick={() => setIsOpen(false)}>Pricing</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;