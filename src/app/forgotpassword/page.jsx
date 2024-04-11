"use client"
import Image from "next/image";
import styles from "./forgotpassword.module.css"
import { useState } from "react";
import Link from "next/link";


const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    return (
        <div className={styles.forgotpasswordContainer}>
              <div className={styles.imgContainer}>
                <p className={styles.properDiagnosis}>
                    Proper Diagnosis
                </p>
                <div className={styles.physicianContainer}>
                <Image src="/physician.png" alt="physician" width={900} height={500} />
                </div>

                <div className={styles.logoContainer}>
                <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
                <p className={styles.logo}>CDSS</p>
                </div>
            </div>

            <div className={styles.textContainer}>
               <div className={styles.textWrapper}>
               <div className={styles.titleContainer}>
                 <h1 className={styles.loginTitle}>Forgot Password</h1>
                 <p className={styles.loginText}>
                 Remember Password?
                 <Link 
                      href="/signin"
                      className={styles.signUp}> Log in</Link>
                 </p>
                </div>

                <form
                       className={styles.form}>
                    <label
                      className={styles.labelInput}>Email <br/>
                    <input 
                      type="text" 
                      placeholder="Enter your email"
                      className={styles.inputBox}
                      value={email}
                      onChange= {(e) => setEmail(e.target.value)}/>
                      </label>

                      <button
                       className={styles.signinBtn}>
                        Continue
                    </button>
                    </form>
               </div>
            </div>
        </div>
    )
}
export default ForgotPassword;