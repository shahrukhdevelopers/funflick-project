import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";
// import CartPane from './components/CartPane/CartPane';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funflick Toys Store",
  description: "Discover a wide range of toys and games for kids of all ages at [Your Store Name]. From educational toys to the latest action figures, find the perfect gift for any occasion. Shop online or visit our store for great deals!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* <CartPane /> */}
        {children}
        <Footer />
        </body>
    </html>
  );
}
