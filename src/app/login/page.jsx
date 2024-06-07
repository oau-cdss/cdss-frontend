"use client"
import Image from "next/image";
import styles from "./login.module.css";
import { useState } from "react";
import Link from "next/link";
import { CgDanger } from "react-icons/cg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const loginSubmit = async (e) => {
        e.preventDefault();



        const token = localStorage.getItem('authToken');
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, 
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
    

                if (data && data.payload && data.payload.user) {
                    const token = data.payload.token;
                    const fullName = data.payload.user.fullName;
                    const userRole = data.payload.user.role;

                    localStorage.setItem("authToken", token);
                    localStorage.setItem("fullName", fullName);
                    localStorage.setItem("userRole", userRole);

                    // Handle successful login
                    switch (userRole) {
                        case 'PATIENT':
                            window.location.href = '/patient-dashboard';
                            break;
                        case 'ADMIN':
                            window.location.href = '/admin-dashboard';
                            break;
                        case 'CLINICIAN':
                            window.location.href = '/clinician-dashboard';
                            break;
                        default:
                            window.location.href = '/';
                            break;
                    }
                } else {
                    setMessage("Invalid response structure from the server.");
                    console.error('Invalid response structure:', data)
                }
            } else {
                const errorMessage = await response.text();
                setMessage(errorMessage.slice(12, -3));
            }
        } catch (error) {
            console.error('Error', error);
            setMessage('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.imgContainer}>
                <p className={styles.properDiagnosis}>Proper Diagnosis</p>
                <div className={styles.physicianContainer}>
                    <Image src="/physician.png" alt="physician" width={900} height={500} />
                </div>
                <div className={styles.logoContainer}>
                    <Image src="/logo.png" alt="logo" width={54} height={54} />
                    <p className={styles.logo}>CDSS</p>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.textWrapper}>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.loginTitle}>Login</h1>
                        <p className={styles.loginText}>Welcome back! Please enter your details.</p>
                    </div>

                    <form onSubmit={loginSubmit} className={styles.form}>
                        {message && (
                            <div className="flex items-center text-red-600 mb-3">
                                <CgDanger size={25} />
                                <p className="ml-2 text-base">{message}</p>
                            </div>
                        )}

                        <label className={styles.labelInput}>
                            Email <br />
                            <input
                                type="text"
                                placeholder="user@gmail.com"
                                className={styles.inputBox}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                aria-label="Email"
                            />
                        </label>

                        <label className={styles.labelInput}>
                            Password <br />
                            <input
                                type="password"
                                placeholder="Password"
                                className={styles.inputBox}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-label="Password"
                            />
                        </label>

                        <div className={styles.passwordContainer}>
                            <label className={styles.rememberText}>
                                <input type="checkbox" className={styles.checkboxInput} />
                                Remember for 30 days
                            </label>

                            <div className={styles.forgetPassword}>
                                <Link href="/forgotpassword">Forgot Password?</Link>
                            </div>
                        </div>

                        <button type="submit" className={styles.signinBtn}>Sign in</button>
                    </form>

                    <div className={styles.signUpAcc}>
                        <p>Don&apos;t have an account? 
                            <Link href="/signup">
                                <span className={styles.signUp}>Sign up</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
