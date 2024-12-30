// Footer.js
import styles from "./Footer.module.css";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Box from "@mui/material/Box";
import { Typography, Grid, Link } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Tooltip from "@mui/material/Tooltip";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <footer id="nt_footer" className={styles.footerBG}>
      <Grid container className={styles.main_container}>
        <Grid item  xl={3} lg={3} md={3}  xs={12} className={styles.item}>
          <Box className={styles.widget}>
            <Typography variant="h3" className={styles.title}>
              Get in touch
            </Typography>
            <Box className={styles.footer_contact}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <PlaceOutlinedIcon className={`${styles.icon}`} />
                  <span>Vaishali</span>
                </Grid>
                <Grid item xs={12}>
                  <MailOutlinedIcon className={`${styles.icon}`} />
                  {/* <span>
                    <Link href="mailto:maskmantoyshelp@gmail.com">
                      maskmantoyshelp@gmail.com
                    </Link>
                  </span> */}
                </Grid>
                <Grid item xs={12}>
                  <LocalPhoneOutlinedIcon
                    className={`${styles.icon} pegk pe-7s-call`}
                  />
                  <span>+91-9953444416</span>
                </Grid>
              </Grid>
              <Box className="nt-social border_ black_" my={2}>
                <Link
                  href="#"
                  target="_blank"
                  className={styles.icon}
                >
                  <Tooltip title="Follow on Facebook" arrow placement="top">
                    <FacebookIcon className="facl facl-facebook" />
                  </Tooltip>
                </Link>
                <Link
                 className={styles.icon}
                  href="https://www.instagram.com/maskmantoys?igshid=YmMyMTA2M2Y%3D"
                  target="_blank"
                  
                >
                  <Tooltip title="Follow on Instagram" arrow placement="top">
                    <InstagramIcon className="facl facl-instagram" />
                  </Tooltip>
                </Link>
                <Link
                 className={styles.icon}
                  href="https://www.youtube.com/@Maskmantoys"
                  target="_blank"
                  
                >
                  <Tooltip title="Follow on YouTube" arrow placement="top">
                    <YouTubeIcon className="facl facl-instagram" />
                  </Tooltip>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        {/* middle  */}
        <Grid item  xl={3} lg={3} md={3}  xs={12} className={styles.item}>
          <Box className={styles.widget}>
            <Typography variant="h3" className={styles.title}>
            Categories
            </Typography>
            <Box className={styles.footer_contact}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  
                  <span>Cars</span>
                </Grid>
               



                <Grid item xs={12}>
                
                  {/* <span>
                    <Link href="mailto:maskmantoyshelp@gmail.com">
                    Electronic Money Bank
                    </Link>
                  </span> */}
                </Grid>
                <Grid item xs={12}>
                  
                  <span>Flying toys</span>
                </Grid>
                <Grid item xs={12}>
                  
                  <span>Other Interesting Toys</span>
                </Grid>
              </Grid>
           
            </Box>
          </Box>
        </Grid>
         {/* middle right */}
         <Grid item  xl={3} lg={3} md={3}  xs={12} className={styles.item}>
          <Box className={styles.widget}>
            <Typography variant="h3" className={styles.title}>
            Information

            </Typography>
            <Box className={styles.footer_contact}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  
                  <span>About Us</span>
                </Grid>
               



                <Grid item xs={12}>
                
                  {/* <span>
                    <Link href="mailto:maskmantoyshelp@gmail.com">
                    DISCLAIMER
                    </Link>
                  </span> */}
                </Grid>
                <Grid item xs={12}>
                  
                  <span>Privacy Policy</span>
                </Grid>
                <Grid item xs={12}>
                  
                  <span>Refund Policy</span>
                </Grid>
                <Grid item xs={12}>
                  
                  <span>Terms & Condition</span>
                </Grid>
              </Grid>
           
            </Box>
          </Box>
        </Grid>
       {/* middle right end */}
       <Grid item  xl={3} lg={3} md={3}  xs={12} className={styles.item}>
          <Box className={styles.widget}>
            <Typography variant="h3" className={styles.title}>
            Useful links
            </Typography>
            <Box className={styles.footer_contact}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  
                  <span>All collections</span>
                </Grid>
               <Grid item xs={12}>
                
                  {/* <span>
                    <Link href="mailto:maskmantoyshelp@gmail.com">
                    Best Seller
                    </Link>
                  </span> */}
                </Grid>
                <Grid item xs={12}>
                  
                  <span>Trending Products</span>
                </Grid>
                 
              </Grid>
           
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box
        id="shopify-section-footer_bot"
        className="shopify-section footer__bot"
      >
        <Box className={`${styles.footer__bot_wrap} pt__20 pb__20`}>
      
            
               
                <Box height={50} display='flex' className={styles.copy} alignItems='center'  justifyContent="center">
                  <Box className="row">
                    <Box className="col-lg-12 col-md-12 col-12 col_1 f_bot_bt_copy">
                      Copyright © 2024 <span className="cp">FUNFLICK TOYS</span>{" "}
                      all rights reserved. Designed &amp; Developed by{" "}
                      <a href="https://www.excelrange.com/" target="_blank">
                        Excel Range Media
                      </a>
                    </Box>
                  </Box>
                </Box>
              
             
         
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;

// components/FooterBot.js
