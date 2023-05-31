"use client";

import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";
import CartDesktop from "./components/CartDesktop";
import CartMobile from "./components/CartMobile";
import CartMobileIcon from "./components/CartMobileIcon";
import Navbar from "./components/Navbar";
import CartProvider from "./context/CartContext";
import "./globals.css";
import Footer from "./components/Footer";

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-robotoCondensed",
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Pizza App",
  description: "Next js project",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}
        >
          <Navbar />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
