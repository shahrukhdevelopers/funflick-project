 "use client"
import React, { useEffect, useState } from 'react';
import styles from './confirm.module.css';
import Link from 'next/link';
import { API_TOKEN } from '../store/Homepage/HomepageAtom';

interface PriceData {
  price: number;
  discount: number;
 
  deliveryCharges: number;
  totalAmount: number;
  savings: number;
}

const Confirm = () => {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(setPriceData,"price in values  sssssssssssssss")

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", API_TOKEN);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://backendapitoys.com/api/v1/checkout", requestOptions)
      .then(response => response.json())
      .then((result: PriceData) => {
        setPriceData(result);

        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Failed to load data.');
        setLoading(false);
      });
  }, []);
 
//   console.log(priceData?.data?.product?.length

// ,"this is result....")


const discount = ((priceData?.data.totalMrp - priceData?.data?.totalActualPrice));
const total = ((priceData?.data.totalMrp + 3));

  return (

    
    <div className={styles.mainDiv}>
      <div>
        <h2 className={styles.h2}>Price details</h2>
      </div>

      <div className={styles.price}>
        Price ({priceData?.data?.product?.length} items) <div>₹{priceData?.data?.totalMrp}</div>
      </div>
      <div className={styles.discount}>
        Discount <div>−₹{discount}</div>
      </div>
     
      <div className={styles.deliveryCharges}>
        Delivery Charges
        <div>
          <del className={styles.del}>₹{priceData?.data?.deliveryCharge}</del>
          <span className={styles.free}><sup>Free</sup></span>
        </div>
      </div>
      <div className={styles.platformFee}>
      Platform Fee<div>₹3</div>
      </div>
      <hr />
      <div className={styles.totalAmount}>
       <b> Total Amount</b> <div>₹{priceData?.data?.totalActualPrice+3}</div>
      </div>
      <hr />

      <div>
        <div></div>
        <h2 className={styles.lastHeading}>You will save ₹{discount} on this order</h2>
      </div>
   
      <Link href="checkout">
        <button className={styles.confirmBtn}>PLACE ORDER</button>
      </Link>
    </div>
  );
};

export default Confirm;

