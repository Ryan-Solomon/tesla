import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { titleAnimation } from '../../animations/animations';
import CarInfoComponent from '../car-info-component/CarInfoComponent';
import './LandingHero.styles.scss';

type Props = {
  title: string;
  backgroundUrl: string;
};

const LandingHero: FC<Props> = ({ title, backgroundUrl }) => {
  const backgroundStyles = {
    background: `linear-Gradient(
      to bottom,
     
      rgba(0, 0, 0, 0.844),
       rgba(38, 38, 38, 0.7)
    ),
    url(${backgroundUrl}) center center / cover no-repeat`,
  };

  return (
    <div style={backgroundStyles} className='model-3-top-container'>
      <header>
        <motion.h1
          variants={titleAnimation}
          initial='hidden'
          animate='show'
          className='car-title'
        >
          {title}
        </motion.h1>
      </header>
      {title === 'TESLA' ? (
        <h2 style={{ marginTop: '8rem', color: 'whitesmoke' }}>
          Accelerating the world's transition to sustainable energy
        </h2>
      ) : (
        <CarInfoComponent />
      )}
    </div>
  );
};

export default LandingHero;
