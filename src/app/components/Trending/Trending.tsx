import React, { useEffect, useState } from "react";
import styles from "./Trending.module.css";
import { Box, Typography } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { doGet } from "@/app/store/api";
import Image from "next/image";

interface ICardProps {
  cardData: {
    id: string; 
    name: string;
    oldPrice: string;
    newPrice: string;
    imgSrc: string;
    discount: string;
  }[];
}

const responsive = {
  superLargeDesktop: {
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

const Trending = () => {
  const [cardData, setCardData] = useState<ICardProps["cardData"]>([]);

  // Fetch Trending Products
  const fetchTrendingProducts = async () => {
    try {
      const response = await doGet("products", { limit: 4 }); // Fetch top any products
      if (response?.products) {
        const transformedData = response.products.map((product: any) => {
          return {
            id: product._id, // Ensure the ID is included
            name: product.name,
            oldPrice: `₹${product.maximumretailprice}`,
            newPrice: `₹${product.offerprice}`,
            imgSrc: product.images[0]?.url || "/placeholder-image.png",
            discount: `${(
              ((product.maximumretailprice - product.offerprice) /
                product.maximumretailprice) *
              100
            ).toFixed(2)}%`,
          };
        });

        setCardData(transformedData);
      }
    } catch (error) {
      console.error("Failed to fetch trending products:", error);
    }
  };

  useEffect(() => {
    fetchTrendingProducts();
  }, []);

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
          <Carousel
            renderDotsOutside={true}
            autoPlay={false}
            responsive={responsive}
            className={styles.caresoul}
          >
            {cardData.map((val, index) => (
              <Link key={index} href={`/details/${val.id}`}>
                <Box className={styles.whiteCard}>
                  <Box className={styles.whiteCardImg}>
                    <Image
                      src={val.imgSrc}
                      alt={val.name}
                      width={120}
                      height={100}
                      placeholder="blur"
                      blurDataURL="/placeholder-image.png"
                    />
                  </Box>

                  <Box className={styles.cardContent} my={2}>
                    <Typography variant="h6" className={styles.Toyname}>
                      {val.name}
                    </Typography>

                    <Box mt={2}>
                      <Box className={styles.ToyPrice}>
                        <span className={styles.NewPrice}>{val.newPrice}</span>{" "}
                        <span className={styles.oldPrice}>{val.oldPrice}</span>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        className={styles.descount}
                      >
                        <Brightness7Icon fontSize="small" />
                        <Typography variant="h6" className={styles.descount}>
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
