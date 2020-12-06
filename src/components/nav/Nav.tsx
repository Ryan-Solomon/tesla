import React, { useState } from 'react';
import './Nav.styles.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../sidebar/Sidebar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <nav className='nav'>
        <div className='tesla-logo'>
          <Link to='/'>
            <h1>TESLA</h1>
          </Link>
        </div>
        <ul className='nav-items'>
          <Link to='/modelS'>
            <li>MODEL S</li>
          </Link>
          <Link to='/model3'>
            <li>MODEL 3</li>
          </Link>
          <Link to='/modelY'>
            <li>MODEL Y</li>
          </Link>
          <Link to='/modelX'>
            <li>MODEL X</li>
          </Link>
          <Link to='/roadster'>
            <li>ROADSTER</li>
          </Link>
          <Link to='/cybertruck'>
            <li>CYBERTRUCK</li>
          </Link>
        </ul>
        <div className='hamburger'>
          <motion.button
            onClick={() => setShowSidebar(true)}
            className='hamburger-button'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GiHamburgerMenu size={20} color='white' />
          </motion.button>
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
};

export default Nav;
