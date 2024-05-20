
import useEmblaCarousel from "embla-carousel-react";
import React, {  useEffect, useState } from "react";
import CarouselControl from "./CarouselControl";


const Carousel = ({ children, data, ...options}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const canScrollPrev = !!emblaApi?.canScrollPrev();
    const canScrollNext = !!emblaApi?.canScrollNext();
    const length = React.Children.count(data)
    
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
    }, [emblaApi])


  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
     
      <CarouselControl
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
        itemsLength={length} selectedIndex={selectedIndex}
      />
    </>
  );
  
};
export default Carousel;
