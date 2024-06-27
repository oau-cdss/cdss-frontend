"use client";

import React from 'react';
import { FiInfo } from "react-icons/fi";
import Image from "next/image";

const SkeletonItem = () => {
  return (
    <div className="bg-[#f9f9f9] rounded-lg shadow-md w-full py-5 px-5 lg:col-span-1 flex justify-between items-center animate-pulse">
      <div className="flex lg:flex-col justify-center items-center ">
        <div className="w-[65px] h-[65px] flex justify-center items-center rounded-full bg-gray-300 animate-pulse"></div>
        <div className="w-[80px] h-[20px] bg-gray-300 mt-5 animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-normal text-sm text-gray-300">Session Date</p>
        <div className="rounded-sm w-[80px] h-[15px] bg-gray-300 mt-5 animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-normal text-sm text-gray-300">Session Time</p>
        <div className="rounded-sm w-[80px] h-[15px] bg-gray-300 mt-5 animate-pulse"></div>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="font-normal text-sm text-gray-300">Patient Name</p>
        <div className="rounded-sm w-[80px] h-[15px] bg-gray-300 mt-5 animate-pulse"></div>
      </div>
      <div className="rounded-sm w-[80px] h-[15px] bg-gray-300 mt-5 animate-pulse"></div>
    </div>
  );
};

const SessionListSkeletonLoader = ({ count }) => {
  return (
    <div className="flex flex-col gap-y-8">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

export default SessionListSkeletonLoader;
