import React, { Dispatch, FC, SetStateAction } from 'react';
import './Sidebar.styles.scss';
import { motion } from 'framer-motion';

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
        <li>MODEL S</li>
        <li>MODEL 3</li>
        <li>MODEL X</li>
        <li>MODEL Y</li>
        <li>Roadster</li>
        <li>CyberTruck</li>
      </ul>
    </section>
  );
};

export default Sidebar;
