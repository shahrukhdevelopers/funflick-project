import styles from "./Trending.module.css"; // Import CSS module
import Card from "./Card";
import { Box, Typography, Grid } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ICardProps {
  cardData: {
    name: string;
    oldPrice: string;
    newPrice: string;
    imgSrc: string;
    discount: string;
  }[];
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const Trending = ({ cardData }: ICardProps) => {
  return (
    <Box className={styles.Trending_container}>
      <Box className={styles.container}>
        <Box
          my={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="h5" className={styles.sectionTitle}>
            Trending
          </Typography>
          <Typography variant="body1" className={styles.sectionSubtitle}>
            Top view in this week
          </Typography>
        </Box>
        <Box my={3}>
          {/** C A R D C O M P O N E N T */}
          <Carousel renderDotsOutside={true} autoPlay={false} responsive={responsive} className={styles.caresoul}>
            {cardData.map((val, index) => (
              <Link key={index} href="/details">
                <Box className={styles.whiteCard}>
                  <Box className={styles.whiteCardImg}>
                    <img src={`/Trending/${val.imgSrc}`} />
                  </Box>

                  <Box className={styles.cardContent} my={2}>
                    <Box>
                      <Typography variant="h6" className={styles.Toyname}>
                        {val.name}
                      </Typography>
                    </Box>

                    <Box mt={2}>
                      <Box className={styles.ToyPrice}>
                        {" "}
                        <span className={styles.NewPrice}>
                          {val.newPrice}
                        </span>{" "}
                        <span className={styles.oldPrice}>{val.oldPrice}</span>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        className={styles.descount}
                      >
                        <Brightness7Icon fontSize="small" />
                        <Typography variant="h6" className={styles.descount}>
                          {" "}
                          {val.discount} off
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Link>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default Trending;
