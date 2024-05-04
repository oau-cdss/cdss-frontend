// components/CarouselControls.tsx
import classNames from "classnames";
import Dots from "./Dots";


const CarouselControls = (props) => {
  return (
    <div className="flex justify-between items-center gap-x-2">
      
   
      
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={classNames({
          " text-green-900 rounded-md": true,
          "text-indigo-200 text-4xl": !props.canScrollPrev,
          "text-indigo-400 text-4xl": props.canScrollPrev,
        })}
      >
        &larr;
      </button>
       <Dots itemsLength={props.itemsLength} selectedIndex={props.selectedIndex} gap="gap-x-2" width="w-40" minWidth="w-12"/>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={classNames({
          " text-green-900 rounded-md": true,
          "text-indigo-200 text-4xl": !props.canScrollNext,
          "text-indigo-400 text-4xl": props.canScrollNext,
        })}
      >
        &rarr;
      </button>
    </div>
  );
};
export default CarouselControls;
