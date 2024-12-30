"use client"
import Image from "next/image";
import styles from "./page.module.css";
import BannerSlider from './components/BannerSlider/BannerSlider'
import Category from "./components/Category/Categories";
import Trending from "./components/Trending/Trending";
import Head from "next/head";
import Testimonials from "./components/Testimonials/Testimonials";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";


const cardData=[
  {
    name:"Dual Camera Drone(Hd Camera) Bestseller rgeable)Free Brief Case Flying Bird ",
    oldPrice:"Rs. 3,500.00",
    newPrice:"Rs. 1,699.00",
    imgSrc:"first.jpg",
    discount:"50%",
  },
  
  {
    name:"Dual Camera Drone(Hd Camera) Bestseller rgeable)Free Brief Case Flying Bird ",
    oldPrice:"Rs. 3,500.00",
    newPrice:"Rs. 1,699.00",
    imgSrc:"first.jpg",
    discount:"50%",
  },
  {
    name:"Motor Aeroplane Rechargeable rgeable)Free Brief Case Flying Bird ",
    oldPrice:"Rs. 1,000.00",
    newPrice:"Rs. 450.00",
    imgSrc:"second.webp",
    discount:"55%",
  },
  {
    


    name:"Flying Bird ( Bestseller) Flying Bird ( Bestseller)",
    oldPrice:"Rs. 700.00",
    newPrice:"Rs. 349.00",
    imgSrc:"fourth.webp",
    discount:"50%",
  },

  {
    name:"Water Electric Gun (Rechargeable)Free Brief Case Flying Bird ( Bestseller)",
    oldPrice:"Rs. 1,100.00",
    newPrice:"Rs. 549.00",
    imgSrc:"third.webp",
    discount:"50%",
  }, {
    


    name:"Flying Bird ( Bestseller)",
    oldPrice:"Rs. 700.00",
    newPrice:"Rs. 349.00",
    imgSrc:"fourth.webp",
    discount:"50%",
  }
]
export default function Home() {
  return (
    <main className={styles.main}>

     <BannerSlider />
     <Trending cardData={cardData} />
     <Category />
     <Testimonials />
    </main>
  );
}
