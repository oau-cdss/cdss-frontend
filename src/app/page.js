"use client"
import Image from "next/image";
import HomeHero from "./components/HomeHero/homeHero";
import ServiceOptions from "./components/serviceOptions/serviceOptions";
import Reviews from "./components/reviews/reviews";
import AboutCarousel from "./components/aboutCarousel/aboutCarousel";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomeHero/>
      <ServiceOptions />
      <AboutCarousel />
      <Reviews />
      <Footer/>
    </div>
  );
}
