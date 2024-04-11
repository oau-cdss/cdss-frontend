"use client"

// components/Carousel.tsx
// import the hook and options type
import React, { useState, useEffect } from "react";
import CarouselControls from "./CarouselControl";
import { useCarousel } from "@/app/context/carouselContext";



const Carousel = ({ children }) => {
 const {emblaRef} = useCarousel()


 
  return (
    <>
    {/*// Attach ref to a div
    // 2. The wrapper div must have overflow:hidden*/}
    <div className="overflow-hidden" ref={emblaRef}>
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className="flex">{children}</div>
    </div>


         {/* <CarouselControls
             canScrollNext={canScrollNext}
             canScrollPrev={canScrollPrev}
             onPrev={() => emblaApi?.scrollPrev()}
             onNext={() => emblaApi?.scrollNext()} /> */}
            <CarouselControls/> 
    </>
  );
};
export default Carousel;
