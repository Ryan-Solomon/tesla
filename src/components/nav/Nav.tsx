import React, { useState } from 'react';
import './Nav.styles.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../sidebar/Sidebar';
import { motion } from 'framer-motion';

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
          <motion.button
            onClick={() => setShowSidebar(true)}
            className='hamburger-button'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GiHamburgerMenu />
          </motion.button>
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Nav;
