import React from "react";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="m-auto px-6 sm:pt-12 sm:px-12 md:pt-16 md:px-16 lg:py-0 lg:px-24 xl:px-28 max-w-[1440px] ">
        <Hero />
        <Work />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
