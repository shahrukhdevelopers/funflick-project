import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./details.module.css";
import { Divider, Paper } from "@mui/material";
import Link from "next/link";

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
    maximumretailprice
  } = product.product;

  // Calculate the discount percentage
  const discount = (((maximumretailprice - offerprice) / maximumretailprice) * 100).toFixed(2);
  const save=((offerprice-maximumretailprice))
  // const imgSrc= product.images[0]?.url || "/placeholder-image.png",

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
                  You save ₹ {save}
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
            <Typography variant="h6">Key Specifications</Typography>
          </Box>

          <Paper elevation={3} borderRadius={2} component={Box} my={2}>
            <Box borderRadius={2} overflow="hidden">
              {/* Render key specifications */}
              {keySpecs && Object.entries(keySpecs).map(([key, value]) => (
                <Box className={styles.specBox} key={key}>
                  <Typography variant="h6">{key}</Typography>
                  <Typography variant="body1">{value}</Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default PageDetails;
