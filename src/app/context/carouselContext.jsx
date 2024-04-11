"use client"
import { createContext, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import React, { useState, useEffect } from "react";

const CarouselContext = createContext()

export const CarouselProvider = ({children,  ...options}) => {
     // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  //const [emblaRef] = useEmblaCarousel(options);
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const data = [ "5", "5", "8", "0", "1"];
 
  const length = React.Children.count(data)
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  const canScrollNext = !!emblaApi?.canScrollNext();

   // We need to track the selectedIndex to allow this component to re-render in react.
  // Since emblaRef is a ref, it won't re-render even if there are internal changes to its state.
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);
    return (
      <CarouselContext.Provider
         value={{
            selectedIndex,
            length,
            canScrollNext,
            canScrollPrev,
            emblaRef,
            emblaApi,
            data
         }}>
           {children}
      </CarouselContext.Provider>
    )
}

export const useCarousel = () => {
    const context = useContext(CarouselContext);
    if(!context) {
        throw new Error("useCarousel must be used within a CarouselProvider")
    }
    return context
}