// components/Header.tsx
"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import CartPane from "../CartPane/CartPane";
import ProfilePane from "../ProfilePane/ProfilePane";
import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";

import {
  cartSlidingPane,
  ProfileSlidingPane,
  headersearchvalue,
  API_TOKEN,
} from "../../store/Homepage/HomepageAtom";
import { url } from "inspector";
import { doGet } from "@/app/store/api";

const HeaderArray = [
  "About Us",
  "Categories",
  "Top Trending",
  "Track Order",
  "Invoices",
];
const NewHeaderArray = [{ val: "About us", url: "aboutus" }, { val: "Products", url: "product" }, { val: "Top Trending", url: "update_product" }
  , { val: "Track Order", url: "Order_Summary", }, { val: "Invoices", url: "Order_page" }];
const Header = () => {
  const [cartPaneState, setcartSlidingPane] = useAtom<any>(cartSlidingPane);
  const [ProfilePaneState, setProfileSlidingPane] =
    useAtom<any>(ProfileSlidingPane);
  const [search, setsearch] = useAtom<string>(headersearchvalue)
  const [cartvalue, setcartvalue] = useState<number>(0);
  // console.log(cartvalue, "this is cart vales.....")



  const cartvaluefetch = async () => {
    try {
      const valuesAddress = await doGet("cart", {}, API_TOKEN);
      // console.log("Fetched cart value123:", valuesAddress);
      setcartvalue(valuesAddress); // Adjust based on your API response structure
    } catch (error) {
      console.error("Error fetching cart value:", error);
    }
  };

  // UseEffect to fetch cart data on component mount
  useEffect(() => {
    cartvaluefetch();
  }, [])





  return (
    <Box className={styles["main-container"]}>
      <Box className={styles.headerDesktop}>
        <Box className={styles.header_location}>
          <Box className={styles.header_icon}>
            <Link href="/">
              <img height={50} src="/icons/logo_new.svg" alt="Shopping Cart" />
            </Link>
            <Box className={styles.ham}>
              <MenuIcon />
            </Box>
          </Box>
        </Box>

        <Box className={`${styles.header_desktop__search}`}>
          <Box className={styles.DesktopSearch_search} id="desktop-header">
            <Box className={styles.DesktopSearch_search__inputBox}>
              <SearchOutlinedIcon
                style={{ height: "40px", color: "#334960" }}
              />
              <form>
                <input type="text" placeholder="Search Toys" onChange={(e) => setsearch(e.target.value)} />
              </form>
            </Box>
          </Box>
        </Box>
        <ProfilePane />
        <CartPane />
        <Box className={styles.header_desktop_options}>
          <Box
            onClick={() =>
              // @ts-ignore
              setcartSlidingPane(true)
            }
            className={styles.header__desktop__options__icon}
          >
            <span className={styles.header_desktop__options__icon__text}>
              Cart
            </span>
            <ShoppingCartOutlinedIcon
              style={{ height: "40px", color: "#334960" }}

            />

         
            <span
              style={{
                backgroundColor: "red",
                color: "white",
                height: "16px",
                width: "17px",
                textAlign: "center",
                borderRadius: "15px",
                position: "absolute",
                marginLeft: "57px",
                marginTop: "-41px",
                display: "inline-block",
                lineHeight: "16px", // Ensures vertical centering for single-line text
              }}
            >
              {cartvalue?.data?.product_ids?.length || 0}
            </span>
          </Box>
          <Box
            onClick={() =>
              // @ts-ignore
              setProfileSlidingPane(true)
            }
            className={styles.header__desktop__options__icon}
          >
            <span className={styles.header_desktop__options__icon__text}>
              Profile
            </span>
            <PersonOutlinedIcon style={{ height: "40px", color: "#334960" }} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box className={styles.headerlinkParent}>
          <div style={{ display: "flex" }}>

            {NewHeaderArray.map((item, index) => (
              <Link key={index} className={styles.headerLink} href={`/${item.url}`}>
                <span style={{ color: "white" }}>{item.val}</span>
              </Link>

            ))}
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", float: "right" }}
          >
            <CallOutlinedIcon style={{ height: "20px", color: "white" }} />
            <a href="tel:+919953444416">+91-9953444416</a>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
