"use client";
import React, { useEffect, useState } from "react";
import AddnewAddress from "../components/Checkout/AddnewAddress";
import { doGet } from "../store/api";
import Button from "../components/CommonComponents/Button";
import styles from "./checkout.module.css";
import { API_TOKEN } from "../store/Homepage/HomepageAtom";

export default function Page() {
  const [userAddresses, setUserAddresses] = useState<any[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
console.log(userAddresses,"this is useraddress")
  const fetchAddresses = async () => {
 
      const valuesAddress = await doGet( "address",{}, API_TOKEN);
      console.log("Fetched addresses:", valuesAddress);
      setUserAddresses(valuesAddress || []);
   
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {showAddForm || userAddresses.length === 0 ? (
        // Show Add Address Form if no addresses or if the form is toggled
        <div>
          <AddnewAddress />
          <div className={styles.backaddress}>          <Button
            text="Back to Address List"
            className={styles.backButton}
            onButtonClick={() => setShowAddForm(false)}
          /></div>

        </div>
      ) : (
        // Show Address List
        <div>
          <h2 className={styles.addressheading}>Saved Addresses:</h2>
          <ul className={styles.uiheading}>
            {userAddresses?.data?.map((address: any, index: number) => (
              <li key={index} className={styles.addressItem}>
                <label>
                  <input type="radio" className={styles.radioicon} name="address" value={address._id} />
                 <span className={styles.label}> {address.addressLine},<br />                {address.city}, {address.pincode}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className={styles.newaddress}>
          <Button
            text="Add New Address"
             width="17%"
            className={styles.addButton1}
            onButtonClick={() => setShowAddForm(true)}
          /></div>
        </div>
      )}
    </div>
  );
}
