import Image from "next/image";
import CarouselHome from "../carousel/carouselHome";

const AboutCarousel = () => {
  return (
    <div className="bg-white w-full relative">
      <div className="lg:absolute top-0 left-0 lg:w-1/5">
        <Image
          src="/Vector.png"
          alt="vector"
          width={120}
          height={100}
          className="hidden lg:block"
        />
        <Image
          src="/Vector.png"
          alt="vector"
          width={120}
          height={100}
          className="block lg:hidden"
        />
      </div>

      <div className="flex flex-col items-center justify-center py-5 lg:py-0 lg:mt-8">
        <p className="w-[95%] lg:w-[70%] text-[36px] font-normal lg:leading-[40px] text-center text-[#03021B] font-cormorant   -mt-16 lg:mt-0 mb-4">
          Our comprehensive sessions provides the right diagnosis and set you on
          the path to wholeness in no time.
        </p>

        <div>
          <CarouselHome />
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
