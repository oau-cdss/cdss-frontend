import { useState } from "react";
import styles from "./forgotpassword.module.css"
import { useForgotPassword } from "../context/forgotpasswordContext";

const ForgotPasswordStep3 = () => {
    const {password, setPassword, confirmPassword, setConfirmPassword} = useForgotPassword()

    return(
        <div className="flex flex-col">
             <label className={styles.labelInput}>New Password  <br/>
                            <input 
                                type="password" 
                                placeholder="Enter new password"
                                className={styles.inputBox}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>

                        <label className={styles.labelInput}>Confirm Password  <br/>
                            <input 
                                type="password" 
                                placeholder="Confirm password"
                                className={styles.inputBox}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </label>
        </div>
    )
}
export default ForgotPasswordStep3;