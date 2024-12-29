import classNames from "classnames";

const Dots = ({ itemsLength, selectedIndex, gap, width, minWidth }) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className={` flex justify-center items-center ${gap}`}>
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            className={classNames({
              [`h-1 ${minWidth} lg:${width} rounded-sm transition-all duration-300 bg-indigo-400`]: true,
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
