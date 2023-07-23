import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Darien Hallam</h1>
      <nav className="navflex">
        <NavLink exact to="/about">About me</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact">Contact me</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </nav>
    </header>
  );
}

export default Header;