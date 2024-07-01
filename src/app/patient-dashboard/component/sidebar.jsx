"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./../../components/ClinicianDashboardComponents/ClinicianComponents.module.css";
import { FaCalendar, FaEnvelope, FaSignOutAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

function Sidebar({ isDropdownOpen }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(isDropdownOpen);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const basePath = "/patient-dashboard";

  const linkStyle = "hover:bg-[#c1bdd9] hover:text-[#1E59CF] text-[#03021B66]";
  const activeStyle = "text-[#1E59CF] bg-[#03021B66]";

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        style={{
          boxShadow: "0px 8px 24px -4px #03021B14",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
        className="hidden lg:flex xl:flex gap-5 bg-[#FDFDFD] text-xl p-8 flex-col items-end justify-between rounded-tr-3xl rounded-br-3xl"
      >
        <div className={styles.logoContainer}> 
          <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
          <p className={styles.logo}>CDSS</p>
        </div>
        <div className="flex py-10 flex-col gap-4">
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
          className="gap-2 items-center justify-center p-2"
        >
          <div className={styles.menuIcon}>
            <div className="text-gray-400 mb-3">
              <FaSignOutAlt size={30} />
            </div>
            <p className={styles.iconTitle}>Logout</p>
          </div>
        </button>
        </div>

       
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#FDFDFD] shadow-md z-10">
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
                  <FaSignOutAlt size={30} />
                </div>
                <p className={styles.iconTitle}>Logout</p>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
