import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animations/animations';

const ModelX = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <h1>Model X</h1>
    </motion.div>
  );
};

export default ModelX;
