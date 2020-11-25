import React from 'react';
import './Nav.styles.scss';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='tesla-logo'>
        <h1>TESLA</h1>
      </div>
      <ul className='nav-items'>
        <li>MODEL S</li>
        <li>MODEL 3</li>
        <li>MODEL X</li>
        <li>MODEL Y</li>
        <li>ROADSTER</li>
        <li>CYBERTRUCK</li>
      </ul>
      <div className='hamburger'>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
