import { motion } from 'framer-motion';
import React from 'react';
import { pageAnimation } from '../../animations/animations';
import LandingHero from '../../components/landing-hero/LandingHero';

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <LandingHero backgroundUrl={backgroundImage} title='Model X' />
    </motion.div>
  );
};

export default Home;
