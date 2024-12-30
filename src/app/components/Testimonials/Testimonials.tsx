import { Box, Typography } from "@mui/material";
import styles from "./Testimonials.module.css";
import StarIcon from "@mui/icons-material/Star";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TestimonialsData = [
  {
    userName: "Lily Lars",
    feedback:
      "Received an outstanding Superb-grade ReFit Refurbished iPhone delivering excellent performance and boasting an impressive camera quality.",
    address: "Indore, Madhya Pradesh",
    imgSrc: "user1.jpg",
  },
  {
    userName: "Rose Roy",
    feedback:
      "I've been eyeing a new phone with a top-notch camera for quite some time. Finally, I opted for a ReFit refurbished OnePlus smartphone that fits my budget and delivers exceptional camera quality.",
    address: "Meerut, Uttar Pradesh",
    imgSrc: "user2.jpg",
  },
  {
    userName: "Sabrina Sharma",
    feedback:
      "ReFit Global offers refurbished smartphones backed by a robust 6-month warranty. Rest assured, if your phone experiences any malfunctions, ReFit has you covered.",
    address: "Indore, Madhya Pradesh",
    imgSrc: "user3.jpg",
  },
  {
    userName: "Saurabh Shukla",
    feedback:
      "Purchased a high-quality 5G refurbished smartphone from ReFit Global, striking the ideal balance between top-notch performance and affordability.",
    address: "Banglore, India",
    imgSrc: "user4.jpg",
  },
];
const Testimonials = () => {
  return (
    <Box className={styles.container}>
       

      <Box
          
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="h6" className={styles.sectionTitle}>
          What Our Customers Say
          </Typography>
          
        </Box>

      <Box my={3}  className={styles.testimonialRow} >
        <Carousel autoPlay={false} responsive={responsive}    >
          {TestimonialsData.map((card, index) => {
            return (
              <Box className={styles.TestimonialCard} key={index}>
                <Box className={styles.image_box}>
                  <img src={`/testimonials/${card.imgSrc}`} />
                </Box>
                <Box className={styles.ratings}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Box>
                <Box className={styles.feedback} my={2}>
                  <Typography variant="body2">
                    {card.feedback}
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <strong style={{color:"#000"}}>{card.userName}</strong>

                  <Typography style={{color:"#000"}} variant="h6">{card.address}</Typography>
                </Box>
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Testimonials;
