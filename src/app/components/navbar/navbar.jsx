import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="lg:mt-0">
      <div className="flex items-center justify-between auto w-full lg:w-[80vw] lg:h-auto lg:rounded-none bg-[#F0EFFF] lg:bg-[#FFFF] pt-12 pb-4 px-4 lg:grid lg:grid-cols-3 mx-auto ">
        <div className="flex justify-center items-center lg:hidden">
          <IoIosMenu size={35} />
        </div>
        <div className="flex items-center justify-center lg:col-span-1 lg:ml-2">
          <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
          <p className="text-[22px] font-bold ml-2 hidden lg:block">CDSS</p>
        </div>
        <div className="items-center justify-center gap-[60px] text-[20px] font-medium hidden lg:flex lg:col-span-1">
          <Link href="/clinicians">Clinicians</Link>
          <Link href="/">Session</Link>
        </div>
        <div className="items-center justify-center gap-[30px] text-[20px] hidden lg:flex lg:col-span-1">
          <div className="flex items-center justify-center bg-white border border-[#1E59CF] text-[#1E59CF] rounded-[5px] h-[48px] w-[90px] font-medium">
            <Link href="/login">Login</Link>
          </div>
          <div className="bg-[#1E59CF] text-white font-medium rounded-md text-sm px-4 py-2">
            <Link href="/">Start a Session</Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <RiSearchLine size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
