"use client";
import React from 'react';
import styles from './Order_Summary.module.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Image from 'next/image';

const Order_Summary = () => {
  const steps = ['Order', 'Shipped', 'Out of delivery', 'Delivered'];

  return (
    <div className={styles.main}>
      <div className={styles.secondpart}>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <div className={styles.priceDetails}>
          <h3>Your order is processing...</h3>
          <div className={styles.detailRow}>
            <span>Price (1 item)</span>
            <span>₹2700</span>
          </div>
          <div className={styles.detailRow}>
            <span>Image</span>
            <span className={styles.spanImage}>
              <Image
                alt="product Image"
                className={styles.imggecart}
                src={'/page1icon/smartwatch3.png'}
                width={40}
                height={40}
                layout="responsive"
              />
            </span>
          </div>
          <div className={styles.detailRow}>
            <span>Discount</span>
            <span className={styles.discount}>−₹1100</span>
          </div>
          <div className={styles.detailRow}>
            <span>Delivery Charges</span>
            <span className={styles.delivery}>₹0 <span className={styles.free}>Free</span></span>
          </div>
          <hr />
          <div className={styles.totalRow}>
            <strong>Total Amount</strong>
            <strong>₹1603</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order_Summary;
