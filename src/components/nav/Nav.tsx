import React, { useState } from 'react';
import './Nav.styles.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../sidebar/Sidebar';

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
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
          <button
            onClick={() => setShowSidebar(true)}
            className='hamburger-button'
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Nav;
