"use client";
import React, { useEffect, useState } from "react";
import AddnewAddress from "../components/Checkout/AddnewAddress";
import { doGet, doPostRaw } from "../store/api";
import Button from "../components/CommonComponents/Button";
import styles from "./checkout.module.css";
import Link from "next/link";
import { API_TOKEN } from "../store/Homepage/HomepageAtom";

export default function Page() {
  const [userAddresses, setUserAddresses] = useState<any[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

   
  console.log(userAddresses, "this is useraddress and hello");
  const fetchAddresses = async () => {
    const valuesAddress = await doGet("address", {}, API_TOKEN);
    console.log("Fetched addresses:", valuesAddress);
    setUserAddresses(valuesAddress || []);
  };

  useEffect(() => {
    fetchAddresses();
  }, []);
  async function onClick() {
    const response = await doPostRaw("address", {}, {}, API_TOKEN);
  }

  

  return (
    <div className={styles.mainContainer}>
      {showAddForm || userAddresses.length === 0 ? (
        // Show Add Address Form if no addresses or if the form is toggled
        <div>
          <AddnewAddress />
          <div className={styles.backaddress}>
            {" "}
            <Button
              text="Back to Address List"
              className={styles.backButton}
              onButtonClick={() => setShowAddForm(false)}
            />
          </div>
        </div>
      ) : (
        // Show Address List
        <div>
          <h2 className={styles.addressheading}>Saved Addresses:</h2>
          <ul className={styles.uiheading}>
            {userAddresses?.data?.map((address: any, index: number) => (
              <li key={index} className={styles.addressItem}>
                <label className={styles.radioContainer}>
                  <input
                    type="radio"
                    className={styles.radioIcon}
                    name="address"
                    value={address._id}
                  />
                  <div className={styles.addressBox}>
                    <span className={styles.label}>
                      {address.addressLine},<br />
                      {address.city}, {address.pincode}
                    </span>
                  </div>
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
            />
             <Link href="Order_page">
            <Button
              text="Next Button"
              onClick={onClick}
          
              /></Link>
          </div>
        </div>
      )}
    </div>
  );
}
