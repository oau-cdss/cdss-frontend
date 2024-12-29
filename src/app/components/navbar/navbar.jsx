"use client"


import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:mt-0 shadow-lg">
      <div className="flex items-center justify-between w-full lg:w-[80vw] lg:h-auto lg:rounded-lg bg-[#F0EFFF] lg:bg-[#FFFF] pt-12 pb-4 lg:grid lg:grid-cols-3 mx-auto">
        {/* Hamburger menu for small screens */}
        <div className="flex justify-center items-center lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoIosClose size={35} /> : <IoIosMenu size={35} />}
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex items-center justify-center lg:col-span-1 lg:ml-2">
          <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
          <p className="text-[22px] font-bold ml-2 hidden lg:block">CDSS</p>
        </div>

        {/* Links Section for large screens */}
        <div className="items-center justify-center gap-[60px] text-[20px] font-medium hidden lg:flex lg:col-span-1">
          <Link href="/clinicians">Clinicians</Link>
          <Link href="/sessions">Session</Link>
        </div>

        
        <div className="items-center justify-center gap-[30px] text-[20px] hidden lg:flex lg:col-span-1">
          <div className="flex items-center justify-center bg-white border border-[#1E59CF] text-[#1E59CF] rounded-[5px] h-[48px] w-[90px] font-medium">
            <Link href="/login">Login</Link>
          </div>
          <div className="bg-[#1E59CF] text-white font-medium rounded-md text-sm px-4 py-2">
            <Link href="/login">Start a Session</Link>
          </div>
        </div>

        
        <div className="flex items-center justify-center lg:hidden">
          <RiSearchLine size={30} />
        </div>
      </div>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="bg-[#F0EFFF] shadow-md py-4 lg:hidden">
          <div className="flex flex-col items-center gap-4 text-[20px] font-medium">
            <Link href="/clinicians" >
              Clinicians
            </Link>
            <Link href="/sessions" >
              Session
            </Link>
            <div className="flex items-center justify-center bg-white border border-[#1E59CF] text-[#1E59CF] rounded-[5px] h-[48px] w-[90px] font-medium">
            <Link href="/login">Login</Link>
            </div>
            <div className="bg-[#1E59CF] text-white font-medium rounded-md text-sm px-4 py-2">
            <Link href="/login">Start a Session</Link>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
