import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import logo from '../../assets/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <header className="header">
      <div className='header-flex'>
        <img className='logo' style={{ flex: '0', marginLeft: '10px' }} src={logo} alt="Logo"  />
        <h1 className="header-title">Moot Court Association, SOEL</h1>
        <div className="hamburger-icon" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon style={{ color: 'white' }} /> : <MenuIcon style={{ color: 'white' }} />}
        </div>
      </div>
      <br />
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink 
          to="/about" 
          className="nav-link" 
          activeClassName="active-link"
          onClick={closeMenu} 
        >
          About LAC SOEL
        </NavLink>
        <NavLink 
          to="/lac" 
          className="nav-link" 
          activeClassName="active-link"
          onClick={closeMenu} 
        >
          The LAC
        </NavLink>
        <NavLink 
          to="/events" 
          className="nav-link" 
          activeClassName="active-link"
          onClick={closeMenu} 
        >
          Events
        </NavLink>
        <NavLink 
          to="/officebearers" 
          className="nav-link" 
          activeClassName="active-link"
          onClick={closeMenu} 
        >
          Previous Office Bearers
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
