
import { useForgotPassword } from "../context/forgotpasswordContext"
import styles from "./forgotpassword.module.css"

const ForgotPasswordStep1 = () => {
   const {email, setEmail} = useForgotPassword()
    return (
        <div>
             <label
                      className={styles.labelInput}>Email <br/>
                    <input 
                      type="text" 
                      placeholder="Enter your email"
                      className={styles.inputBox}
                      value={email}
                      onChange= {(e) => setEmail(e.target.value)}/>
                      </label>
        </div>
    )
}
export default ForgotPasswordStep1;