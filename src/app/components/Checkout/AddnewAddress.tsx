"use client";
import React, { useState } from "react";
import CommonInputField from "../CommonComponents/CommonInputField";
import Button from "../CommonComponents/Button";
import { doGet, doPostRaw } from "@/app/store/api";
import styles from "./AddnewAddress.module.css";
import { useEffect } from "react";
import Link from "next/link";
import { API_TOKEN } from "@/app/store/Homepage/HomepageAtom";
function AddnewAddress() {
  const [formValue, setformValue] = useState<any>({
    pincode: "",
    landmark: "",
    addressLine: "",
    city: "",
  });
  const [cities, setCities] = useState<any[]>([]); // Stores city data
  // console.log(cities,"hhhhhhhhhhhhhhhhhhhhhhhhh")

  const handleState = (e: any) => {
    const { value, name } = e.target;
    setformValue((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // city api apply

  const fetchCities = async () => {
    const cityfetch = await doGet(
      "city",
      cities,
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzgxZGZlYTYyNTFlNGE0MmI3NDEwYyIsImlhdCI6MTczMjMzNzgyNiwiZXhwIjoxNzYzODczODI2fQ.ScHpoy2Hcx9E_1Nh_BO9HQYuW6RSNfCy3nL7p175XlE"
    );

    setCities(cityfetch);
  };

  // Fetch cities on component mount
  useEffect(() => {
    fetchCities();
  }, []);

  async function onClick() {
    const response = await doPostRaw("address", {}, formValue, API_TOKEN);
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.heading}>SHIPPPING ADDRESS</div>
        <div>
          <CommonInputField
            label="Pincode"
            name="pincode"
            placeholder="Enter Your PinCode"
            value={formValue.pincode}
            onChange={handleState}
          />
          <CommonInputField
            label="landMark"
            name="landmark"
            placeholder="Enter Your LandMark"
            value={formValue.landMark}
            onChange={handleState}
          />
          <CommonInputField
            label="addressline"
            name="addressLine"
            placeholder="Enter Address"
            value={formValue.addressLine}
            onChange={handleState}
          />
          <h1 className={styles.selectcityname}>Select Your City</h1>
          <select
            id="city-dropdown"
            className={styles.input}
            name="city"
            value={formValue.city}
            onChange={handleState}
          >
            <option value="">-- Select a City --</option>
            {cities?.City?.map((CityValue: any, index: any) => (
              <option key={index} value={CityValue._id}>
                {" "}
                {CityValue.cityName}
              </option>
            ))}

            <option value="">Loading Cities...</option>
          </select>

          <p id="selected-city"></p>
          <Link href="orderplace">
            <div className="BackButton">
              <Button
                text="CONTINUE"
                className={styles.btn}
                onButtonClick={onClick}
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default AddnewAddress;
