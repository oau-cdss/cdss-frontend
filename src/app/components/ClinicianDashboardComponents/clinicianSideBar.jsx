import Image from "next/image";
import styles from "./ClinicianComponents.module.css";
import { HiMiniUser } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const ClinicianSideBar = () => {
    const [open, setOpen] = useState(false);
    const logOut = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/";
    }

    return (
        <div className={styles.container}>
            <div className={`hidden lg:flex flex-col px-[30px] items-right shadow-md py-[30px] ${styles.sticky}`}>
                <div className={styles.logoContainer}>
                    <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
                    <p className={styles.logo}>CDSS</p>
                </div>

                <div className={styles.menuBar}>
                    <Link href="/clinician-dashboard">
                        <div className={styles.menuIcon}>
                            <div className="text-gray-400 mb-3">
                                <MdDashboard size={30} />
                            </div>
                            <p className={styles.iconTitle}>Dashboard</p>
                        </div>
                    </Link>  

                    <Link href="/sessions">
                        <div className={styles.menuIcon}>
                            <div className="text-gray-400 mb-3">
                                <FaCalendar size={30} />
                            </div>
                            <p className={styles.iconTitle}>Sessions</p>
                        </div>
                    </Link>

                    <Link href="/schedule">
                        <div className={styles.menuIcon}>
                            <div className="text-gray-400 mb-3">
                                <HiMiniUser size={30} />
                            </div>
                            <p className={styles.iconTitle}>Schedule</p>
                        </div>
                    </Link>
                </div>

                <div 
                className={styles.logoutDiv}
                onClick={logOut}>
                    <Image src="/logout.png" alt="logout" width={18} height={18} />
                    <p>Logout</p>
                </div>
            </div>
            
            <div className={styles.scrollableContent}>
                {/* Your content that will scroll */}
            </div>
        </div>
    );
};

export default ClinicianSideBar;
