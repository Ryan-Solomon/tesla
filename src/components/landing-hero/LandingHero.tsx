import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
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
        <>
          <CarInfoComponent />
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{ duration: 2, delay: 1 }}
            className='icon'
          >
            <AiFillCaretDown color='grey' size={30} />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default LandingHero;
