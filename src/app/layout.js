import { Inter, Barlow } from "next/font/google";
import "./globals.css";
import Head from "./Components/Nav/page";
import Foot from "./Components/Footer/page";
const inter = Inter({ subsets: ["latin"] });
const as = Barlow({
  family: ["Lobster Two", "sans-serif"],
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Generative-Blogs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/next.svg" />
      <body className={as.className}>
        {/* <Head /> */}
        {children}
        {/* <Foot /> */}
      </body>
    </html>
  );
}
