import styles from "./Category.module.css"; // Import CSS module
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box, Grid, Typography } from "@mui/material";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SecurityIcon from "@mui/icons-material/Security";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Carousel } from 'react-responsive-carousel';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
import clsx from "clsx";
const Category = () => {
   

  return (
    <Box className={styles.category_container}>
      <Box className={styles.container}>
        <Box  >
        <Box
          my={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="h5" className={styles.sectionTitle}>
            Categories
          </Typography>
          
        </Box>

          <Box my={3}>
          <Carousel
               autoPlay={false}
               responsive={responsive}
              centerMode={true}
            >
              <div className={styles.image_box}>
                <img  src="/category/cars.jfif" />
                <div className={styles.overlay}>
                  <h3>Cars</h3>
                </div>
              </div>
              <div className={styles.image_box}>
                <img src="/category/electronic.webp"/>
                <div className={styles.overlay}>
                  <h3>Electronic Money Bank</h3>
                </div>
              </div>
              <div className={styles.image_box}>
              <img src="/category/flying.webp"/>
                <div className={styles.overlay}>
                  <h3>Flying Toys</h3>
                </div>
              </div>
              <div className={styles.image_box}>
              <img src="/category/speakers.jfif"/>
                <div className={styles.overlay}>
                  <h3>Speakers</h3>
                </div>
              </div>
              <div className={styles.image_box}>
              <img src="/category/other.avif"/>
                <div className={styles.overlay}>
                  <h3>Other intresting toys</h3>
                </div>
              </div>
             
              
           
            </Carousel>
          </Box>
        </Box>

    
 
        <Box className={`${styles.shopifySection}`}>
          <Box
            className={`${styles.row} ${styles.flexNowrap} ${styles.flexWrapMd} ${styles.oah} ${styles.useBorderFalse}`}
          >
            {/* Shipping Items */}
            <Grid container spacing={5} className={`${styles.col}`}>
              <Grid item md={3} lg={3} xs={12} className={`${styles.shipping}`}>
                <Box
                  mr={2}
                  className={`${styles.colAuto} ${styles.icon} ${styles.medium} ${styles.csi}`}
                >
                  <AttachFileIcon
                    className={clsx(styles.icon, styles.rotated_icon)}
                  />
                </Box>
                <Box className={`${styles.content}`}>
                  <h3 className={`${styles.title}`}>FUNFLICK TOYS</h3>
                  <p className={`${styles.subtText}`}>Follow Us on Instagram</p>
                </Box>
              </Grid>

              <Grid item md={3} lg={3} xs={12} className={`${styles.shipping}`}>
                <Box
                  mr={2}
                  className={`${styles.colAuto} ${styles.icon} ${styles.medium} ${styles.csi}`}
                >
                  <DirectionsCarIcon className={clsx(styles.icon)} />
                </Box>
                <Box className={`${styles.content}`}>
                  <h3 className={`${styles.title}`}>FAST SHIPPING</h3>
                  <p className={`${styles.subtText}`}>
                    Fast Shipping on all Orders Across India & Overseas.
                  </p>
                </Box>
              </Grid>

              <Grid item md={3} lg={3} xs={12} className={`${styles.shipping}`}>
                <Box
                  mr={2}
                  className={`${styles.colAuto} ${styles.icon} ${styles.medium} ${styles.csi}`}
                >
                  <OfflineBoltIcon className={clsx(styles.icon)} />
                </Box>
                <Box className={`${styles.content}`}>
                  <h3 className={`${styles.title}`}>QUICK SUPPORT</h3>
                  <p className={`${styles.subtText}`}>
                    Connect with us for any query and we will be there to assist
                    you.
                  </p>
                </Box>
              </Grid>

              <Grid item md={3} lg={3} xs={12} className={`${styles.shipping}`}>
                <Box
                  mr={2}
                  className={`${styles.colAuto} ${styles.icon} ${styles.medium} ${styles.csi}`}
                >
                  <SecurityIcon className={clsx(styles.icon)} />
                </Box>
                <Box className={`${styles.content}`}>
                  <h3 className={`${styles.title}`}>100% SECURE PAYMENT</h3>
                  <p className={`${styles.subtText}`}>
                    We Ensure Secure Payment with Trusted Payment Gateways
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Category;
