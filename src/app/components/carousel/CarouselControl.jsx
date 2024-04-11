// components/CarouselControls.tsx
import classNames from "classnames";
import Dots from "./dots";
import { useCarousel } from "@/app/context/carouselContext";


const CarouselControls = () => {
  const {canScrollNext, canScrollPrev, emblaApi} = useCarousel()
  const onPrev = () => emblaApi?.scrollPrev()
  const onNext = () => emblaApi?.scrollNext()
  return (
    <div className="flex items-center justify-center gap-2 ">
      <button
        onClick={() => {
          if (canScrollPrev) {
            onPrev();
          }
        }}
        disabled={!canScrollPrev}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-indigo-200": !canScrollPrev,
          "bg-indigo-400": canScrollPrev,
        })}
      >
        Prev
      </button>
      <Dots  />
      <button
        onClick={() => {
          if (canScrollNext) {
            onNext();
          }
        }}
        disabled={!canScrollNext}
        className={classNames({
          "px-4 py-2 text-white rounded-md": true,
          "bg-indigo-200": !canScrollNext,
          "bg-indigo-400": canScrollNext,
        })}
      >
        Next
      </button>
    </div>
  );
};
export default CarouselControls;
