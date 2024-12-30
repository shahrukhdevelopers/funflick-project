"use client";

import React, { useState } from 'react';
import styles from './Order_page.module.css';
import Image from 'next/image';
import Confirm from '../confirm/page';

const Page = () => {
 
 

  return (
    <div className={styles.main}>
      <div className={styles.part1}>
        <p>Your Order Details</p>
      </div>
      <div className={styles.part2}>
        <p>
          Deliver to: Shahrukh khan 121001 <br />
          House No 477 Near BN Public School, Sec 49 General Shop...
        </p>
        <div className={styles.part21}>
          <button>Change</button>
        </div>
      </div>
      <div className={styles.flexremove}>
      <div className={styles.part3}>
        <div className={styles.image}>
          <Image
            alt="product Image"
            className={styles.imggecart}
            src={'/page1icon/smartwatch3.png'}
            width={120}
            height={100}
            layout="responsive"
          />
         
        </div>
        <div className={styles.productdetails}>
          <strong className={styles.productDefinition}>
            This is a very good product
          </strong>
          <p>Watch</p>
          <p>Seller: Shahrukh</p>
          <span className={styles.discountOneLine}>
            <del>₹1900</del> ₹1400
            <p className={styles.discount1}>66% Off 3 offers available</p>
          </span>
          <div className={styles.saveAndRemove}>
         
           
          </div>
        </div>
        <div>
          Delivery by Tue Dec 17 | ₹40 <span className={styles.delivery}> Free</span>
        
        </div>
        <div className={styles.flexremove}> <button className={styles.rmovebtn}>Remove</button></div>
      
      </div>
      





      </div>
      <div>
      <div className={styles.priceDetails}>
  <h3>Price Details</h3>
  <div className={styles.detailRow}>
    <span>Price</span>
    <span>₹2700</span>
  </div>
  <div className={styles.detailRow}>
    <span>Discount</span>
    <span className={styles.discount}>−₹1100</span>
  </div>
  <div className={styles.detailRow}>
    <span>Delivery Charges</span>
    <span className={styles.delivery}>₹0 <span className={styles.free}>Free</span></span>
  </div>
  <div className={styles.detailRow}>
    <span>Platform Fee</span>
    <span>₹3</span>
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

export default Page;
