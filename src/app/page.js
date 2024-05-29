"use client"
import HomeHero from "./components/HomeHero/homeHero";
import ServiceOptions from "./components/serviceOptions/serviceOptions";
import Reviews from "./components/reviews/reviews";
import AboutCarousel from "./components/aboutCarousel/aboutCarousel";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import {SessionProvider} from "../context/sessionContext"

export default function Home() {
  return (
    <SessionProvider>

    <div>
      <Navbar/>
      <HomeHero/>
      <ServiceOptions />
      <AboutCarousel />
      <Reviews />
      <Footer/>
    </div>
    </SessionProvider>
  );
}
