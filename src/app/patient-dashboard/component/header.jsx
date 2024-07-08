"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./../../components/ClinicianDashboardComponents/ClinicianComponents.module.css";
import { FaCalendar, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import icon from '../component/Icons.png'
  
function Header({ isDropdownOpen }) {
  const [fullNamePrefix, setFullNamePrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isOpen, setIsOpen] = useState(isDropdownOpen);

  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const basePath = "/patient-dashboard";

  const linkStyle = "hover:bg-[#c1bdd9] hover:text-[#1E59CF] text-[#03021B66]";
  const activeStyle = "text-[#1E59CF] bg-[#03021B66]";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullNameFromStorage = localStorage.getItem("fullName");
      if (fullNameFromStorage) {
        const nameParts = fullNameFromStorage.split(" ");
        const firstNameExtracted = nameParts[0];
        const lastNameExtracted = nameParts[1];

        if (firstNameExtracted) {
          setFirstName(firstNameExtracted);
        } else {
          setFirstName("Guest");
        }

        if (!lastNameExtracted && firstNameExtracted) {
          setFullNamePrefix(firstNameExtracted.slice(0, 1));
        } else if (!firstNameExtracted && lastNameExtracted) {
          setFullNamePrefix(lastNameExtracted.slice(0, 1));
        } else if (!firstNameExtracted && !lastNameExtracted) {
          setFullNamePrefix("A");
        } else {
          setFullNamePrefix(
            `${firstNameExtracted.slice(0, 1)}${lastNameExtracted.slice(0, 1)}`
          );
        }
      } else {
        setFirstName("Guest");
        setFullNamePrefix("G");
      }
    }
  }, []);

  return (
    // This is the header
    <div className="h-1/5 w-full p-10 flex gap-4 justify-between items-center relative">
      <div className="flex justify-between w-full lg:hidden xl:hidden items-center">
        <div className="text-[#0D0D0D] font-bold text-2xl flex items-center gap-3">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          CDSS
        </div>
        <button
          onClick={toggleDropdown}
          className="text-[#0D0D0D] font-bold text-2xl z-20"
        >
          ☰
        </button>
      </div>
      <div className="hidden w-full lg:flex gap-4 lg:justify-between items-center xl:flex xl:justify-between">
        <div>
          <h3 className="font-semibold lg:text-4xl">
            Welcome <span className="text-[#1E59CF]">{firstName}</span>!
          </h3>
        </div>
        <div className="flex justify-end gap-4">
          <div className="flex items-center bg-[#ffffff] p-2 gap-2 rounded-xl w-64 shadow-md">
            <Image src="/search.png" alt="search" width={30} height={30} />
            <input
              type="search"
              placeholder="Search"
              className="p-2 outline-none"
            />
          </div>
          <div className="flex items-center">
            <Image
              src={icon}
              alt="notifications"
              width={30}
              height={30}
            />
          </div>
          <div className="flex gap-2 items-center border px-3 py-1 rounded-xl">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-white font-bold text-lg">
              {fullNamePrefix}
            </div>
            <p className="text-[#03021B80] text-lg font-semibold">
              {firstName}
            </p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FDFDFD] shadow-md z-10">
          <div className="lg:hidden fixed top-24 left-0 w-full bg-[#FDFDFD] shadow-md z-10">
            {isOpen && (
              <div className="flex flex-col items-center gap-4 p-4">
                <Link
                  href={`${basePath}`}
                  className={
                    router.pathname === `${basePath}` ? activeStyle : linkStyle
                  }
                >
                  <div className={styles.menuIcon}>
                    <div className="text-gray-400 mb-3">
                      <MdDashboard size={30} />
                    </div>
                    <p className={styles.iconTitle}>Dashboard</p>
                  </div>
                </Link>
                <Link
                  href={`${basePath}/sessions`}
                  className={
                    router.pathname === `${basePath}/sessions`
                      ? activeStyle
                      : linkStyle
                  }
                >
                  <div className={styles.menuIcon}>
                    <div className="text-gray-400 mb-3">
                      <FaCalendar size={30} />
                    </div>
                    <p className={styles.iconTitle}>Sessions</p>
                  </div>
                </Link>
                <Link
                  href={`${basePath}/messages`}
                  className={
                    router.pathname === `${basePath}/messages`
                      ? activeStyle
                      : linkStyle
                  }
                >
                  <div className={styles.menuIcon}>
                    <div className="text-gray-400 mb-3">
                      <FaEnvelope size={30} />
                    </div>
                    <p className={styles.iconTitle}>Messages</p>
                  </div>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex gap-2 items-center justify-center p-2"
                >
                  <div className={styles.menuIcon}>
                    <div className="text-gray-400 mb-3">
                      <FaSignOutAlt size={30} color="red" />
                    </div>
                    <p className={styles.iconTitle}>Logout</p>
                  </div>
                </button>
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full text-white font-bold text-lg">
                  {fullNamePrefix}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
