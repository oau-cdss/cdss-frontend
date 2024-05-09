import Link from "next/link";
import styles from "./homeHero.module.css"
import Image from "next/image";

const HomeHero = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 pb-16">
            <div className={styles.boxOne}>
                <p className={`${styles.text} invisible lg:block`}>
                Revolutionize Movement:<br/>Your Path to Musculoskeletal Wellness Begins!
                </p>

                <div className={`${styles.miniBox} hidden lg:block`}>
                    <div>
                    <Image src="/search.png" alt="arrow-down" width={20} height={20} />
                        
                        <p>I&apos;d like to find out</p>
                    </div>

                    <div>
                        <p>How to start a session</p>
                        <Image src="/arrow-down.png" alt="arrow-down" width={20} height={20} />
                    </div>

                    <div className="blue-btn">
                        <Link href="/">Learn More</Link>
                    </div>
                </div>

            </div>
            <div className={styles.boxTwo}>
                  <p className={`${styles.text} block lg:hidden mb-10`}>
                Revolutionize Movement:<br/>Your Path to Musculoskeletal Wellness Begins!
                </p>
                <div className={styles.img}>
                <Image 
                  src="/sideview1.png" 
                  alt="patient's side view" 
                  width={520} 
                  height={57}
                  />
            </div>
                  </div>
        </div>
    )
}
export default HomeHero;