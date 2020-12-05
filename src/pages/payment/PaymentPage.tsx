import React from 'react';
import { pageAnimation } from '../../animations/animations';
import Payment from './../../components/payment/Payment';
import { motion } from 'framer-motion';

const PaymentPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Payment />
    </motion.div>
  );
};

export default PaymentPage;
