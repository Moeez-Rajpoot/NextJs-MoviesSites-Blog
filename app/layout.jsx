import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movies Sites",
  description: "Generated by Moeez Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
