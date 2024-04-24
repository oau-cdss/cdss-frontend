import Image from "next/image";
import styles from "./ClinicianComponents.module.css"

const ClinicianSideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.logoContainer}>
            <Image src="/logo.png" alt="logo" width={53.99} height={53.99} />
          <p className={styles.logo}>CDSS</p>
            </div>

            <div className={styles.menuBar}>
                <div className={styles.menuIcon}>
                <Image src="/dashboard.png" alt="dashboard" width={22} height={20.75}/>
                <p className={styles.iconTitle}>Dashboard</p>
                </div>

                <div className={styles.menuIcon}>
                <Image src="/calendar.png" alt="sessions-icon" width={22} height={20.75}/>
                <p className={styles.iconTitle}>Sessions</p>
                </div>

                <div className={styles.menuIcon}>
                <Image src="/patient.png" alt="patient" width={22} height={20.75}/>
                <p className={styles.iconTitle}>Patient</p>
                </div>
            </div>

            <div className={styles.logoutDiv}>
            <Image src="/logout.png" alt="logout" width={22} height={20.75}/>
                <p>Logout</p>
            </div>

        </div>
    )
}
export default ClinicianSideBar;