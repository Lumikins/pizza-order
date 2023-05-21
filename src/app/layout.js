import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${quicksand.variable} ${bangers.variable} ${robotoCondensed.variable} font-quicksand`}
      >
        {children}
      </body>
    </html>
  );
}
