"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Grid, Typography, Snackbar, Alert, Divider, Paper } from "@mui/material";
import styles from "./details.module.css";
import Link from "next/link";
import { useAtom } from "jotai";
import { doPostRaw } from "../store/api";
import { ProfileSlidingPane, API_TOKEN } from "../store/Homepage/HomepageAtom";

const PageDetails = ({ product }) => {
  // Check if product exists and has the necessary properties
  if (!product || !product.product) {
    return <div>Loading product details...</div>;
  }

  const {
    name,
    actualPrice,
    description,
    keySpecs,
    offerprice,
    totalMrp,
    totalActualPrice,
    images,
    maximumretailprice,
    seller  } = product.product;

  // Calculate the discount percentage
  const discount = (((maximumretailprice - offerprice) / maximumretailprice) * 100).toFixed(2);
  const save=(maximumretailprice-offerprice)
  // const imgSrc= product.images[0]?.url || "/placeholder-image.png",
  const [userData, setUserData] = useState<any>(null);
  const [profilePaneState, setProfileSlidingPane] = useAtom(ProfileSlidingPane);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await localStorage.getItem("userDetails");
      if (data) setUserData(JSON.parse(data));
    };
    fetchUserData();
  }, []);

  const onAddToCart = async () => {
    const body = { product_ids: [`${product.product._id}`] };

    if (!userData) {
      setProfileSlidingPane(false);
    } else {
      try {
        const res = await doPostRaw("cart", {}, body, API_TOKEN);
        console.log("Cart Response:", res);
        setSnackbarOpen(true);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  return (
    <Box className={styles.details_container}>
      <Box className={styles.container}>
        <Grid container justifyContent="space-between">
          <Grid item lg={4} md={4} xs={12}>
            <Box className={styles.leftSide}>
              <Box className={styles.productDisplay}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={styles.displayImg}
                  justifyContent="center"
                >
                  <img
                    src={product.product.images[0]?.url || "/category/flying.webp"}  // Use fallback image if not available
                    className={styles.imgBANNER}
                    alt={name}
                  />
                  
                </Box>
                <Box className={styles.highlight} display="flex">
                  <Box className={styles.highBox}>
                    <Typography variant="h6">47</Typography>
                    <Typography variant="body1">
                      Points <br /> Quality Check
                    </Typography>
                  </Box>
                  <Box className={styles.highBox}>
                    <Typography variant="h6">3</Typography>
                    <Typography>
                      Days <br /> Replacement
                    </Typography>
                  </Box>
                  <Box className={styles.highBox}>
                    <Typography variant="h6">6</Typography>
                    <Typography>
                      Months <br /> Warranty
                    </Typography>
                  </Box>
                  <Box className={styles.highBox}>
                    <Typography variant="h6">COD</Typography>
                    <Typography>Available</Typography>
                  </Box>
                </Box>
              </Box>

              <Box my={2} display="flex" flexDirection="column" width="100%">
                <Button
                  className={styles.btnPrimary}
                  variant="contained"
                  color="primary"
                  onClick={onAddToCart}
                >
                  Add to cart
                </Button>
                <Box my={1} />
                <Link href="/checkout">
                  <Button
                    className={styles.btnWhite}
                    variant="outlined"
                    color="primary"
                    fullWidth
                  >
                    Buy Now
                  </Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={8} md={8} xs={12}>
            <Box>
              <Box
                my={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" className={styles.title}>
                  {name || "Product Name"}
                </Typography>
                <Typography className={styles.instock} variant="body1">
                  In Stock
                </Typography>
              </Box>
              <Box
                my={1}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                gap={1}
              >
                <Typography variant="h5" className={styles.newPrice}>
                  ₹ {offerprice || "N/A"}
                </Typography>
                <Typography variant="h6" className={styles.oldPrice}>
              {maximumretailprice}
                </Typography>
              </Box>
              <Box
                display="flex"
                my={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" className={styles.savings}>
                  {discount}% off
                </Typography>
              </Box>
              <Box
                display="flex"
                my={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" className={styles.youSave}>
                  You save ₹{save}
                </Typography>
              </Box>
            </Box>

            <Divider />
            <Box my={2} className="select Grade">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={2}
              >
                <Typography variant="h6" className={styles.grade}>
                Seller :{seller}
                </Typography>
                <Typography variant="body2" className={styles.newPrice}>
                  View details
                </Typography>
              </Box>

              <Box className={styles.variationSelection}>
                <span>SuperB</span>
                <Typography>₹ {actualPrice || "N/A"}</Typography>
              </Box>
            </Box>

            <Divider />
            <Box my={2} className="select Grade">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={2}
              >
                <Typography variant="h6" className={styles.grade}>
                  Color
                </Typography>
              </Box>

              <Box p={1} display="flex" gap={3}>
                {/* Color Selection */}
                <Box>
                  <Box className={styles.blackColor}></Box>
                  <Typography variant="body1" className={styles.colorName}>
                    Flashy Black
                  </Typography>
                </Box>
                <Box>
                  <Box className={styles.purpleColor}></Box>
                  <Typography variant="body1" className={styles.colorName}>
                    Peppy Purple
                  </Typography>
                </Box>
                <Box>
                  <Box className={styles.puresblackColor}></Box>
                  <Typography variant="body1" className={styles.colorName}>
                    Black
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box my={2} />
        <Divider />
        <Box my={2} />
       <Box>
          <Box className={styles.specs}>
          <Typography variant="h6">key specification</Typography>
          </Box>
        

          <Paper elevation={3} borderRadius={2} component={Box} my={2}>
      <Box  borderRadius={2}   overflow="hidden">
        <Box className={styles.specBox}  >
          <Typography variant="h6">Display</Typography>
          <Typography variant="body1">1.3" / 1.4" / 1.5" AMOLED / LCD</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Battery Life</Typography>
          <Typography variant="body1">3-7 days (Depends on Usage)</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Touchscreen</Typography>
          <Typography variant="body1"> Yes</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Strap Material</Typography>
          <Typography variant="body1"> Silicone / Leather / Stainless Steel</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Charging Type</Typography>
          <Typography variant="body1">Magnetic / Wireless</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">RAM & Storage</Typography>
          <Typography variant="body1">512MB - 2GB RAM, 4GB - 16GB Storage</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Water Resistance </Typography>
          <Typography variant="body1">IP67 / IP68 / 5ATM</Typography>
        </Box>
      
      </Box>
    </Paper>
     {/* Snackbar for Cart Notification */}
     <Snackbar open={snackbarOpen} autoHideDuration={2000} onClose={handleSnackbarClose}anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert onClose={handleSnackbarClose} severity="success" variant="filled">
            Product added to cart!
          </Alert>
        </Snackbar>
        </Box>
      </Box>
    </Box>
  );
};

export default PageDetails;
