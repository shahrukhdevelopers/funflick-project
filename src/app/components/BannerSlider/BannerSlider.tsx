// ElasticCarousel.js
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Box, Typography } from "@mui/material";

function ElasticCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bannerData, setbannerData] = useState([]);
  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <Box
      style={{
        maxWidth: "1250px",
        width: "100%",
        margin: "1rem auto",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Carousel
        autoPlay={true}
        showArrows={false}
        onChange={(index) => handleSlideChange(index)}
        selectedItem={activeSlide}
        infiniteLoop={true}
        showThumbs={false}
        interval={2000}
      >
        <div style={{ backgroundColor: "lightgray", width: "100%" }}>
          <img src="/banner/banner_1.webp" width="100%" />
        </div>
        <div style={{ backgroundColor: "lightgray", width: "100%" }}>
          <img src="/banner/banner_2.webp" width="100%" />
        </div>
        <div style={{ backgroundColor: "lightgray", width: "100%" }}>
          {" "}
          <img src="/banner/banner_3.webp" width="100%" />
        </div>
        <div style={{ backgroundColor: "lightgray", width: "100%" }}>
          <img src="/banner/banner_4.webp" width="100%" />
        </div>
      </Carousel>
    </Box>
  );
}

export default ElasticCarousel;
