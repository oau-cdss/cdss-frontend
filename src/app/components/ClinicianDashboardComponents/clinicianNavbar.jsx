"use client";
import React, { useEffect, useState } from 'react';
import { FaBell } from "react-icons/fa";
import { useSession } from '../../../context/sessionContext';

const ClinicianNavbar = ({ currentRegion }) => {
    const { continueSession } = useSession();
    const [firstName, setFirstName] = useState('');
    const [nameInitials, setNameInitials] = useState('');
    const [savedCurrentRegion, setSavedCurrentRegion] = useState('');

    useEffect(() => {
        const fullName = localStorage.getItem('fullName');
      
        if (fullName) {
            let words = fullName.split(" ");
            setFirstName(words[0]);
            setNameInitials(words.map(word => word[0]).join(''));
        }

        const region = localStorage.getItem("savedCurrentRegion");

        if (region) {
            setSavedCurrentRegion(region);
        }
    }, [currentRegion]);

    return (
        <div className="flex-col flex lg:flex-row justify-between px-5 py-6">
            <div className="flex justify-between items-center">
                {continueSession ? (
                    <>
                        <p className="text-2xl font-semibold">{currentRegion || savedCurrentRegion}</p>
                    </>
                ) : (
                    <p className="font-bold text-2xl">
                        Welcome                   
                        <span className="text-[#1e59cf] ml-2">
                            {firstName}!                     
                        </span>
                    </p>
                )}

                <div className="lg:hidden flex items-center">
                    <div className="mr-3 text-gray-500 relative">
                        <FaBell size={30}/>
                        <div className="w-2 h-2 rounded-full bg-[#1e59cf] absolute top-0.5 right-0.5"></div>
                    </div>

                    <div className="flex justify-center items-center p-1 border w-auto border-[#6761ff] rounded-full">
                        <div className='w-9 h-9 rounded-full border border-[#6761ff] flex items-center justify-center '>
                            <p>{nameInitials}</p>
                        </div>
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

                <div className="hidden lg:flex items-center p-3 border border-[#6761ff] rounded-md">
                    <div className='w-9 h-9 rounded-full border border-[#6761ff] flex items-center justify-center '>
                        <p>{nameInitials}</p>
                    </div>
                    <p className="ml-3 text-[#03021b] font-semibold text-base">{firstName}</p>
                </div>
            </div>
        </div>
    );
};


  
  export default ClinicianNavbar ;
  
