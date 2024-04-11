
//import { useCarousel } from "@/app/context/carouselContext";
import Carousel from "./carousel";
import CarouselComponent from "./CarouselComponent";
const CarouselHome = () => {
  //const images = [ "5", "5", "8", "0", "1"];
  
  
  
  return (
    <div className="lg:w-3/4 mx-auto my-2">
      <Carousel loop>
         <CarouselComponent/>
      </Carousel>
    </div>
  );
};

export default CarouselHome;

