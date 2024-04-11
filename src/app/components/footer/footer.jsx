import Image from "next/image";
import styles from "./footer.module.css"
const Footer = () => {
    return    (
        <div className={styles.container}>
            <div className={styles.firstContainer}>
            <div className={styles.gridContainer}>
                <p className={styles.title}>Join CDSS</p>

                <div className={styles.listContainer}>
                    <p>Client</p>
                    <p>Clinician</p>
                    <p>Admin</p>
                </div>
            </div>

            <div className={styles.gridContainer}>
                <p className={styles.title}>Session</p>
                <div className={styles.listContainer}>
                    <p>Tendinitis</p>
                    <p>Carpal Tunnel Syndrome</p>
                    <p>Osteoarthritis</p>
                    <p>Rheumatoid Arthris(RA)</p>
                    <p>Fibromyalgia</p>
                    <p>Bone Fractures</p>
                </div>
            </div>

            <div className={styles.gridContainer}>
            <p className={styles.title}>Company</p>

             <div className={styles.listContainer}>
                <p>About Us</p>
                <p>Contact CDSS</p>
                <p>Start Session</p>

             </div>
            </div>

            <div className={styles.gridContainer}>
            <p  className={styles.title}>Find us on</p>

            <div className={styles.socials}>
                <div>
                    <Image src="/instagram.png" alt="instagram" width={48} height={48} />
                </div>
                <div>
                  <Image src="/facebook.png" alt="facebook" width={48} height={48} />
                </div>
                <div>
                <Image src="/linkedIn.png" alt="linkedIn" width={48} height={48} />
                </div>
                <div>
                <Image src="/twitter.png" alt="twitter" width={48} height={48} />
                </div>
            </div>
            </div>
             
            </div>
             <hr className={styles.rule}/>

             <div className={styles.secondContainer}>
                <p>
                    &copy; 2024 CDSS. All rights reserved.
                </p>

                <div className={styles.innerContainer}>
                    <p>
                        Terms and Conditions
                    </p>
                    <p>
                        Privacy
                    </p>
                </div>
             </div>
        </div>
    )
}
export default Footer;