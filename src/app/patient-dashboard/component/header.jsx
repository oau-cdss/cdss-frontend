'use client'

import React from "react";
import Image from "next/image";

function Header() {
  // Retrieve fullName from localStorage
  const fullName = typeof window !== 'undefined' ? localStorage.getItem("fullName") : '';

  return (
    <div className="h-1/5 w-full p-10 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-4xl">
          Welcome <span className="text-[#1E59CF]">{fullName ? fullName : 'Guest'}!</span>
        </h3>
      </div>
      <div className="flex justify-end gap-4">
        <div  className="flex items-center bg-[#ffffff] p-2 gap-2 rounded-xl w-64 shadow-md">
          <Image src="/search.png" alt="arrow-down" width={30} height={30} />
          <input type="search" placeholder="Search" className="p-2 outline-none" />
        </div>
        <div className="flex items-center">
          <Image src="/icons.png" alt="notifications" width={30} height={30} />
        </div>
        <div className="flex gap-2 items-center border px-3 py-1 rounded-xl ">
          <Image src="/profile.png" alt="profile.png" width={30} height={30} />
          {/* Display fullName if available, otherwise display "Guest" */}
          <p className="text-[#03021B80] text-lg font-semibold">{fullName ? fullName : 'Guest'}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
