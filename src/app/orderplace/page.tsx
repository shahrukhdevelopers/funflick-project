import React from 'react'
import styles from "./order.module.css";

const OrDerplace = () => {
  return (
    <div className={styles.thankYouContainer}>
    <h1 className={styles.h1}>Thank You for Your Order!..✓</h1>
    <p className={styles.p}>Your order has been successfully placed.</p>
 
   
    <p className={styles.a}>We will notify you once your order is on its way!</p>
    {/* <a href="/">Go back to Home</a> */}
  </div>
);
}
export default OrDerplace
