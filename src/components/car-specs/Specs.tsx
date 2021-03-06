import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import './Specs.styles.scss';
import { useScroll } from './../use-scroll/useScroll';
import { motion } from 'framer-motion';
import { fade } from './../../animations/animations';

const Specs = () => {
  const { path } = useRouteMatch();
  const [vehicle, setVehicle] = useState(path.slice(1));
  const [element, controls] = useScroll();

  useEffect(() => {
    setVehicle(path.slice(1));
  }, [path]);

  const { vehicles } = useAppContext();
  const currentVehicle = vehicles[vehicle];

  const { Name, MainInfo } = currentVehicle;

  return (
    <motion.section
      initial='hidden'
      variants={fade}
      ref={element}
      animate={controls}
      className='specs-container'
    >
      <div className='hero-image'></div>
      <div className='specs-info'>
        <div className='specs-title'>
          <h1>{Name} Specs</h1>
        </div>
        <div className='two-column-specs'>
          {MainInfo.map((item) => {
            return (
              <div key={item.name} className='item-info'>
                <div className='title-line'></div>
                <h3>{item.name}</h3>
                <h5>{item.value}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Specs;
