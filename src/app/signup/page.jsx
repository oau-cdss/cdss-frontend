"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "./signup.module.css";

const SignUp = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [message, setMessage] = useState("");

    const handleRoleChange = (e) => {
        setRole(e.target.value.toUpperCase()); // Convert role to uppercase
    };

    const signupSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://cdss-api.fly.dev/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, fullName, role, password }),
            });
            if (response.status === 200) {
                const data = await response.json();
                console.log(data);
                
                if (typeof window !== 'undefined') {
                    // Code accessing localStorage
                    localStorage.setItem('userRole', role);
                    localStorage.setItem('fullName', fullName);
                  }
                  
                

                // Handle successful signup, e.g., redirect to dashboard
                window.location.href = "/login";
            } else {
                const errorMessage = await response.text();
                // alert(errorMessage)
                const beginningSlice = errorMessage.slice(12, -1); 
                const endSlice = beginningSlice.slice(0, -2)
                setMessage(endSlice);
            }
        } catch (error) {
            console.error('Error', error);
            alert(error);
           
        }
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.imgContainer}>
                <p className={styles.properDiagnosis}>
                    Proper Diagnosis
                </p>
                <div className={styles.physicianContainer}>
                    <Image src="/physician.png" alt="physician" width={900} height={500} priority />
                </div>

                <div className={styles.logoContainer}>
                    <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
                    <p className={styles.logo}>CDSS</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.loginTitle}>Sign up</h1>
                        <p className={styles.loginText}>
                            Create an account
                        </p>
                    </div>

                    <form onSubmit={signupSubmit} className={styles.form}>
                        <label className={styles.labelInput}>Full Name <br/>
                            <input 
                                type="text" 
                                placeholder="Enter your full name"
                                className={styles.inputBox}
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </label>

                        {/* <label className={styles.labelInput}>Last Name <br/>
                            <input 
                                type="text" 
                                placeholder="Enter your Last name"
                                className={styles.inputBox}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </label> */}


                        <label className={styles.labelInput}>Email <br/>
                        <p className="text-red-600 text-sm">{message}</p>
                            <input 
                                type="text" 
                                placeholder="Enter your email"
                                className={styles.inputBox}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label className={styles.labelInput}>Password  <br/>
                            <input 
                                type="password" 
                                placeholder="Create a password"
                                className={styles.inputBox}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <label className={styles.role}>
                            Role <br/>
                            <select className={styles.rolebox} value={role} onChange={handleRoleChange}>
                                <option></option>
                                <option value="PATIENT">Patient</option>
                                <option value="CLINICIAN">Clinician</option>
                                <option value="ADMIN">Admin</option> {/* Change "admin" to "ADMIN" */}
                            </select>
                        </label>

                        <button className={styles.signinBtn}>Create an account</button>
                    </form>

                    <div className={styles.signUpAcc}>
                        <p>Already have an account? 

                        <Link href="login" className={styles.signUp}> Log in</Link>
                        </p>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default SignUp;
