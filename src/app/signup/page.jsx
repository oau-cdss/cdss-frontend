"use client";

import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./signup.module.css";
import { useState } from "react";

const SignUp = () => {
    const [message, setMessage] = useState("");

    const validationSchema = Yup.object({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
        role: Yup.string().oneOf(["PATIENT", "CLINICIAN", "ADMIN"], "Invalid role").required("Role is required"),
    });

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            role: "",
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/auth/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if (response.status === 200) {
                    const data = await response.json();
                    setMrssage("Registration Successful")

                    if (typeof window !== 'undefined') {
                        localStorage.setItem('userRole', values.role);
                        localStorage.setItem('fullName', values.fullName);
                    }

                    window.location.href = "/login";
                } else {
                    const errorMessage = await response.text();
                    const beginningSlice = errorMessage.slice(12, -1); 
                    const endSlice = beginningSlice.slice(0, -2)
                    setMessage(endSlice);
                }
            } catch (error) {
                console.error('Error', error);
            } finally {
                setSubmitting(false);
            }
        },
    });

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

                    <form onSubmit={formik.handleSubmit} className={styles.form}>
                        <div className="text-red-600">
                            <p>{message}</p>
                        </div>
                        <label className={styles.labelInput}>
                            Full Name <br/>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className={styles.inputBox}
                                {...formik.getFieldProps('fullName')}
                            />
                            {formik.touched.fullName && formik.errors.fullName ? (
                                <div className="text-red-600 text-base">{formik.errors.fullName}</div>
                            ) : null}
                        </label>

                        <label className={styles.labelInput}>
                            Email <br/>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className={styles.inputBox}
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-600 text-base">{formik.errors.email}</div>
                            ) : null}
                        </label>

                        <label className={styles.labelInput}>
                            Password <br/>
                            <input
                                type="password"
                                placeholder="Create a password"
                                className={styles.inputBox}
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-600 text-base">{formik.errors.password}</div>
                            ) : null}
                        </label>

                        <label className={styles.role}>
                            Role <br/>
                            <select
                                className={styles.rolebox}
                                {...formik.getFieldProps('role')}
                            >
                                <option value="">Select a role</option>
                                <option value="PATIENT">Patient</option>
                                <option value="CLINICIAN">Clinician</option>
                                <option value="ADMIN">Admin</option>
                            </select>
                            {formik.touched.role && formik.errors.role ? (
                                <div className="text-red-600 text-base">{formik.errors.role}</div>
                            ) : null}
                        </label>

                       

                        <button type="submit" className={styles.signinBtn} disabled={formik.isSubmitting}>
                            Create an account
                        </button>
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
