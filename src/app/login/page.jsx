"use client"
import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const loginSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = data.payload.user.token
            const response = await fetch('https://cdss-api.fly.dev/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                const userRole = data.payload.user.role
                // Handle successful login, e.g., redirect to dashboard
                if (userRole === 'PATIENT') {
                    // Redirect to patient dashboard
                    window.location.href = '/patient-dashboard';
                } else if (userRole === 'ADMIN') {
                    // Redirect to admin dashboard
                    window.location.href = '/admin-dashboard';
                } else if (userRole === 'CLINICIAN') {
                    // Redirect to clinician dashboard
                    window.location.href = '/clinical-dashboard';
                } else {
                    // Handle other cases or provide a default redirection
                    window.location.href = '/';
                }
            } else {
                const errorMessage = await response.text();
                setMessage(errorMessage);
            }
        } catch (error) {
            console.error('Error', error);
            alert(error);
            // window.location.href = "/forgotpassword"; // Uncomment if you want to redirect to forgot password
        }
    };

    return (
        <div className={styles.loginContainer}>
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
                        <h1 className={styles.loginTitle}>Login</h1>
                        <p className={styles.loginText}>
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    <form onSubmit={loginSubmit} className={styles.form}>
                    <p>{message}</p>
                        <label className={styles.labelInput}>Email <br/>
                            <input 
                                type="text" 
                                placeholder="user@gmail.com"
                                className={styles.inputBox}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                      
                        <label className={styles.labelInput}>Password  <br/>
                            <input 
                                type="password" 
                                placeholder="Password"
                                className={styles.inputBox}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <div className={styles.passwordContainer}>
                            <label className={styles.rememberText}>
                                <input 
                                    type="checkbox"
                                    className={styles.checkboxInput}
                                />                              
                                Remember for 30 days                      
                            </label>

                            <div className={styles.forgetPassword}>
                                <Link href="/">Forgot Password?</Link>
                            </div>
                        </div>

                        <button className={styles.signinBtn}>Sign in</button>
                    </form>

                    <div className={styles.signUpAcc}>
                        <p>Don&apos;t have an account? </p>
                        <Link href="/signup">
                            <span className={styles.signUp}>Sign up</span>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
