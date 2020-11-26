import React, { Dispatch, FC, SetStateAction } from 'react';
import './Sidebar.styles.scss';

type Props = {
  showSidebar: boolean;
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: FC<Props> = ({ showSidebar, setShowSidebar }) => {
  return (
    <section
      className={`sidebar-container ${showSidebar ? '' : 'hide-sidebar'}`}
    >
      <button
        className='hide-sidebar-button'
        onClick={() => setShowSidebar(false)}
      >
        X
      </button>
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
