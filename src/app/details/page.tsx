import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./details.module.css";
import {Divider,Paper} from "@mui/material";
import Link from "next/link";
 

 

const PageDetails = () => {

 

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
                    src="/category/flying.webp"
                    className={styles.imgBANNER}
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
                    <Typography variant="h6"> 3</Typography>
                    <Typography>
                      Days <br /> Replacement
                    </Typography>
                  </Box>
                  <Box className={styles.highBox}>
                    <Typography variant="h6">6</Typography>
                    <Typography>
                      {" "}
                      Months <br /> Warranty{" "}
                    </Typography>
                  </Box>
                  <Box className={styles.highBox}>
                    <Typography variant="h6">COD</Typography>
                    <Typography> Available</Typography>
                  </Box>
                </Box>
              </Box>

              <Box my={2} display="flex" flexDirection="column" width="100%">
                <Button
                  className={styles.btnPrimary}
                  variant="contained"
                  color="primary"
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
            <Box className="">
              <Box
                my={2}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" className={styles.title}>
                  Xiaomi Redmi 11 Prime Refurbished
                </Typography>
                <Typography className={styles.instock} variant="body1">
                  in stock
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
                  ₹ 6,799{" "}
                </Typography>
                <Typography variant="h6" className={styles.oldPrice}>
                  ₹ 14,999
                </Typography>
              </Box>
              <Box
                display="flex"
                my={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" className={styles.savings}>
                  54.7% off
                </Typography>
              </Box>
              <Box
                display="flex"
                my={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" className={styles.youSave}>
                  You save ₹ 8,200.00
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
                  Select Grade
                </Typography>

                <Typography variant="body2" className={styles.newPrice}>
                  View details
                </Typography>
              </Box>

              <Box className={styles.variationSelection}>
                <span>SuperB</span>
                <Typography>₹ 6,799</Typography>
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
          <Typography variant="body1">16.71 cm (6.58 inch) 2408 x 1080 Pixels</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Rear Camera</Typography>
          <Typography variant="body1">50MP + 2MP + 2MP</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Front Camera</Typography>
          <Typography variant="body1">8MP Front Camera</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Storage</Typography>
          <Typography variant="body1">64GB</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Battery</Typography>
          <Typography variant="body1">5000 mAh</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">Processor</Typography>
          <Typography variant="body1">Helio G99</Typography>
        </Box>
        <Box className={styles.specBox}  >
          <Typography variant="h6">OS</Typography>
          <Typography variant="body1">Android 12</Typography>
        </Box>
      </Box>
    </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default PageDetails;
