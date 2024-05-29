import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-40 bg-gray-900 overflow-hidden z-40 flex items-center justify-center">
      {children}
    </div>
  );
};
export default Overlay;
