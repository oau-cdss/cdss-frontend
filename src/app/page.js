"use client"
import HomeHero from "./components/HomeHero/homeHero";
import ServiceOptions from "./components/serviceOptions/serviceOptions";
import Reviews from "./components/reviews/reviews";
import AboutCarousel from "./components/aboutCarousel/aboutCarousel";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import {ScheduleProvider} from "../context/ScheduleContext"

export default function Home() {
  return (
    <ScheduleProvider>

    <div>
      <Navbar/>
      <HomeHero/>
      <ServiceOptions />
      <AboutCarousel />
      <Reviews />
      <Footer/>
    </div>
    </ScheduleProvider>
  );
}
