import React from 'react';
import './header.css';  

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Moot Court Association, SOEL</h1>
        <nav className="header-nav">
          <a href="/about" className="nav-link">About MCA SOEL</a>
          <a href="/mca" className="nav-link">The MCA</a>
          <a href="/news" className="nav-link">News</a>
          <a href="/mentorship" className="nav-link">Mentorship</a>
          <a href="/team-finder" className="nav-link">Team Finder</a>
          <a href="/previous-office-bearers" className="nav-link">Previous Office Bearers</a>
          <a href="/registration" className="nav-link">Registration and Allocation of Team Codes</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
