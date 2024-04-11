//import Image from "next/image";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
// import AuthLinks from "../authLinks/AuthLinks";
// import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
          <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
          <p className={styles.logo}>CDSS</p>
                </div>
      <div className={styles.links}>
        <Link href="/">Clinicians</Link>
        <Link href="/">Session</Link>
        <Link href="/">Messages</Link>
      </div>
      
      <div className={styles.button}>
       <div className={styles.loginBtn}>
       <Link href="/login">Login</Link>
       </div>
       <div className="blue-btn">
       <Link href="/">Start a Session</Link>
       </div>
      </div>
       
      </div>
    </div>
  );
};
export default Navbar;



