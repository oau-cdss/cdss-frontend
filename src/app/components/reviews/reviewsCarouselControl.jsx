// components/CarouselControls.tsx
import classNames from "classnames";
import Dots from "../carousel/Dots"



const ReviewsCarouselControl = (props) => {
  return (
    <div className="flex flex-col items-center -mt-24">
      
        <Dots itemsLength={props.itemsLength} selectedIndex={props.selectedIndex} gap="gap-x-0" width="w-10" minWidth="w-10" />
      <div className="flex gap-x-7 mt-5">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          " text-indigo-400 rounded-full bg-[#6761FF1A] w-10 h-10": true,
          "text-indigo-200 text-4xl": !props.canScrollPrev,
          "text-indigo-400 text-4xl": props.canScrollPrev,
        })}
      >
        &larr;
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
            alert("next")
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          " text-indigo-4040 rounded-full bg-[#6761FF1A] w-10 h-10": true,
          "text-indigo-200 text-4xl": !props.canScrollNext,
          "text-indigo-400 text-4xl": props.canScrollNext,
        })}
      >
        &rarr;
      </button>
      </div>
    </div>
  );
};
export default ReviewsCarouselControl;
