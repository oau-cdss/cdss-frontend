"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { FaBell } from "react-icons/fa";

const ClinicianNavbar = () => {
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const fullName = localStorage.getItem('username');
      
        if (fullName) {
            let words = fullName.split(" ")
            setFirstName(words[0]);
        }
    }, []);

    return (
        <div className="flex-col flex lg:flex-row justify-between py-6">
            <div className="flex justify-between items-center">
                <p className="font-bold text-2xl">
                    Welcome                   
                    <span className="text-[#1e59cf] ml-2">
                     {firstName}!                     
                    </span>
                </p>

                <div className="lg:hidden flex items-center">
                    <div className="mr-3 text-gray-500 relative">
                        <FaBell size={30}/>
                        <div className="w-2 h-2 rounded-full bg-[#1e59cf] absolute top-0.5 right-0.5"></div>
                    </div>

                    <div className="flex justify-center items-center p-1 border w-auto border-[#6761ff] rounded-full">
                        <Image src="/clinician-img.png" alt="clinician-img" width={35} height={35}/>
                    </div>    
                </div>
            </div>

            <div className="lg:flex items-center justify-center">
                <div>
                    <input type="text" placeholder="Search" className="px-5 py-4 rounded-md shadow-md outline-none w-5/6 lg:w-full mt-4 lg:mt-0 "/>
                </div>

                <div className="hidden lg:block mx-5 text-gray-500 relative">
                    <FaBell size={30}/>
                    <div className="w-2 h-2 rounded-full bg-[#1e59cf] absolute top-0.5 right-0.5"></div>
                </div>

                <div className="hidden lg:flex p-3 border border-[#6761ff] rounded-md">
                    <Image src="/clinician-img.png" alt="clinician-img" width={35} height={35}/>
                    <p className="ml-3 text-[#03021b] font-semibold text-base">{firstName}</p>
                </div>
            </div>
        </div>
    );
};

export default ClinicianNavbar;
