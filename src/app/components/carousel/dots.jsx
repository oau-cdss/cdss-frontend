import { useCarousel } from "@/app/context/carouselContext";
import classNames from "classnames";


const Dots = () => {
  const {length, selectedIndex} = useCarousel()
  const arr = new Array(length).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-center -translate-y-5 ">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              "h-0.5 w-28 rounded-md transition-all duration-300 bg-[#03021b]":
                true,
              // tune down the opacity if slide is not selected
              "opacity-50": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;
