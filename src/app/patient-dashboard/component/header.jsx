'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header({ isDropdownOpen }) {
  const [fullName, setFullName] = useState('');
  const [fullNamePrefix, setFullNamePrefix] = useState('');
  const [isOpen, setIsOpen] = useState(isDropdownOpen);

  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const basePath = "/patient-dashboard";

  const linkStyle = "hover:bg-[#c1bdd9] hover:text-[#1E59CF] text-[#03021B66]";
  const activeStyle = "text-[#1E59CF] bg-[#03021B66]";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullNameFromStorage = localStorage.getItem("fullName");

      if (fullNameFromStorage) {
        const nameParts = fullNameFromStorage.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts[1];

        if (!lastName && firstName) {
          setFullName(firstName);
          setFullNamePrefix(firstName.slice(0, 1));
        } else if (!firstName && lastName) {
          setFullName(lastName);
          setFullNamePrefix(lastName.slice(0, 1));
        } else if (!firstName && !lastName) {
          setFullName("Avatar");
          setFullNamePrefix("A");
        } else {
          setFullName(fullNameFromStorage);
          setFullNamePrefix(`${firstName.slice(0, 1)}${lastName.slice(0, 1)}`);
        }
      } else {
        setFullName('Guest');
        setFullNamePrefix('G');
      }
    }
  }, []);

  return (
    //this is the header
    <div className="h-1/5 w-full p-10 flex gap-4 justify-between items-center relative">
      <div className="flex gap-5 lg:hidden xl:hidden items-center">
        <div className="text-[#0D0D0D] font-bold text-2xl flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          CDSS
        </div>
        <button onClick={toggleDropdown} className="text-[#0D0D0D] font-bold text-2xl">
          ☰
        </button>
      </div>
      <div>
        <h3 className="font-semibold lg:text-4xl">
          Welcome <span className="text-[#1E59CF]">{fullName}</span>!
        </h3>
      </div>
      <div className="flex justify-end gap-4">
        <div className="flex items-center bg-[#ffffff] p-2 gap-2 rounded-xl w-64 shadow-md">
          <Image src="/search.png" alt="search" width={30} height={30} />
          <input type="search" placeholder="Search" className="p-2 outline-none" />
        </div>
        <div className="flex items-center">
          <Image src="/icons.png" alt="notifications" width={30} height={30} />
        </div>
        <div className="flex gap-2 items-center border px-3 py-1 rounded-xl">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-white font-bold text-lg">
            {fullNamePrefix}
          </div>
          <p className="text-[#03021B80] text-lg font-semibold">{fullName}</p>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDFDFD] shadow-md z-10">
          <div className="flex flex-col items-center gap-4 p-4">
            <Link
              href={`${basePath}`}
              className={router.pathname === `${basePath}` ? activeStyle : linkStyle}
            >
              <div className="flex flex-col gap-2 items-center justify-center p-2">
                <Image src="/dashboard.png" alt="logo" width={30} height={30} />
                <p className="font-semibold text-lg">Dashboard</p>
              </div>
            </Link>
            <Link
              href={`${basePath}/sessions`}
              className={router.pathname === `${basePath}/sessions` ? activeStyle : linkStyle}
            >
              <div className="flex flex-col gap-2 items-center justify-center p-2">
                <Image src="/sessions.png" alt="logo" width={30} height={30} />
                <p className="font-semibold text-lg">Sessions</p>
              </div>
            </Link>
            <Link
              href={`${basePath}/messages`}
              className={router.pathname === `${basePath}/messages` ? activeStyle : linkStyle}
            >
              <div className="flex flex-col gap-2 items-center justify-center p-2">
                <Image src="/messages.png" alt="logo" width={30} height={30} />
                <p className="font-semibold text-lg">Messages</p>
              </div>
            </Link>
            <button onClick={handleLogout} className="flex gap-2 items-center justify-center p-2">
              <Image src="/logout.png" alt="logo" width={30} height={30} />
              <p className="text-[#03021B66] font-semibold text-lg">Log out</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
