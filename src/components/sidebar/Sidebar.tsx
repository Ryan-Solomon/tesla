import React, { Dispatch, FC, SetStateAction } from 'react';
import './Sidebar.styles.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type Props = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: FC<Props> = ({ showSidebar, setShowSidebar }) => {
  return (
    <section
      className={`sidebar-container ${
        showSidebar ? 'show-sidebar' : 'hide-sidebar'
      }`}
    >
      <motion.button
        className='hide-sidebar-button'
        onClick={() => setShowSidebar(false)}
        whileHover={{
          scale: 0.9,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        X
      </motion.button>
      <ul className='sidebar-items'>
        <Link to='/modelS'>
          <li>MODEL S</li>
        </Link>
        <Link to='/model3'>
          <li>MODEL 3</li>
        </Link>
        <Link to='/modelX'>
          <li>MODEL X</li>
        </Link>
        <Link to='/modelY'>
          <li>MODEL Y</li>
        </Link>
        <Link to='/roadster'>
          <li>ROADSTER</li>
        </Link>
        <Link to='/cybertruck'>
          <li>CYBERTRUCK</li>
        </Link>
      </ul>
    </section>
  );
};

export default Sidebar;
