import styles from "./Trending.module.css"; // Import CSS module
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

interface Icard {
     details :{
        name:string,
        oldPrice:string,
        newPrice:string,
        imgSrc:string,
        discount:string,
     }
}
const Card = ({details}:Icard) => {
  return (
    <Box className={styles.Card_container}>
      <Box className={styles.discount}>
        <Typography variant="h5">{details.discount}</Typography>
      </Box>
      <Box className={styles.cardView}>
        <Box className={styles.imgView}>
          <img src={`/Trending/${details.imgSrc}`} />
        </Box>

        {/**HOVER EFFECT BOX */}
        <Box className={styles.hoverDetails}>
          <FavoriteBorderIcon style={{ fontSize: 25 }} />
          <Box className={styles.hoverActionView}>
            <Typography variant="h6" className={styles.hoverActions}>
              Quick View
            </Typography>
            <Typography variant="h6" className={styles.hoverActions}>
              Add to cart
            </Typography>
          </Box>
        </Box>
        <Box className={styles.ToyDesc}>
        <Link href="/details">
        <Typography variant="h6" className={styles.Toyname}>{details.name}</Typography> 
       <Box className={styles.ToyPrice}> <span className={styles.oldPrice}>{details.oldPrice}</span> <span className={styles.NewPrice}>{details.newPrice}</span>
       
       </Box> 
          </Link>
      

        </Box>
      </Box>
    </Box>
  );
};

export default Card;
