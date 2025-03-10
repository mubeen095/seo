"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import BgVideo from "@/component/reuseable/BgVideo";
import Footer from "@/component/Footer";
import { usePathname } from "next/navigation";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const excludedRoutes = ["/termsandconditions", "/privacypolicy"];
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="IT NOVA - Leading Technology Education Platform. Learn Programming, Data Structures, Web Development, UI/UX, and Digital Marketing from Industry Experts. Join 200,000+ learners worldwide." />
        <meta name="keywords" content="IT NOVA, itnova, it nova, technology education, programming courses, DSA, web development, UI/UX design, digital marketing, online learning" />
        <meta name="author" content="IT NOVA" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="IT NOVA - Leading Technology Education Platform" />
        <meta property="og:description" content="Learn Programming, Data Structures, Web Development, UI/UX, and Digital Marketing from Industry Experts. Join 200,000+ learners worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="IT NOVA" />
        <link rel="icon" href="/favicon.ico" />
        <title>IT NOVA - Leading Technology Education Platform | Programming, DSA, Web Development</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {!excludedRoutes.includes(pathname) ? (
          <div  className=" overflow-x-hidden">
            <Navbar />
            <BgVideo />
            <div id="main" className=" relative z-10">
              {children}
            </div>
            <Footer />
          </div>
        ) : (
          <>{children}</>
        )}
      </body>
    </html>
  );
}
