import { useState, useEffect } from "react";
import styles from "./forgotpassword.module.css";
import { useForgotPassword } from "../context/forgotpasswordContext";

const ForgotPasswordStep2 = () => {
 
const {tokenOne, setTokenOne,
  tokenTwo,   setTokenTwo,
  tokenThree, setTokenThree,
   tokenFour, setTokenFour,
   fourDigitToken, setFourDigitToken} = useForgotPassword()
  return (
    <div>
      <p className="">Enter code sent to your email</p>

      <div className={styles.emailTokenBox}>
        <input type="number" value={tokenOne} onChange={(e) => setTokenOne(e.target.value)} />
        <input type="number" value={tokenTwo} onChange={(e) => setTokenTwo(e.target.value)} />
        <input type="number" value={tokenThree} onChange={(e) => setTokenThree(e.target.value)} />
        <input type="number" value={tokenFour} onChange={(e) => setTokenFour(e.target.value)} />
      </div>
      <p className="font-semibold text-base text-[#03021b] mt-5">
        Didn&apos;t receive code?
        <span className="text-[#1e59cf]"> Send it again</span>
      </p>
    </div>
  );
};

export default ForgotPasswordStep2;
