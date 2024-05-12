import Link from "next/link";
import styles from "./homeHero.module.css"
import Image from "next/image";


const HomeHero = () => {
    return (
        <div className="lg:grid grid-cols-2 grid-rows-1 gap-x-8 lg:r pb-16">
            <div className={styles.boxOne}>
                <p className={`${styles.text} text-5xl`}>
                Revolutionize Movement:<br/>Your Path to Musculoskeletal Wellness Begins!
                </p>

                <div className={`${styles.miniBox} `}>
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
            <div className=" lg:hidden flex justify-center items-center py-4">
       <div className={styles.loginBtn}>
       <Link href="/login">Login</Link>
       </div>
       <div className="blue-btn ml-3">
       <Link href="/">Start a Session</Link>
       </div>
      </div>
                  <p className={`${styles.text} text-4xl  block lg:hidden `}>
                Revolutionize Movement:<br/>Your Path to Musculoskeletal Wellness Begins!
                </p>
                <div className={styles.img}>
            
            <div className="relative mt-16">

                <Image 
                  src="/sideview1.png" 
                  alt="patient's side view" 
                  width={520} 
                  height={57}
                  />
                   <div className={`${styles.miniBox} absolute bottom-5 block lg:hidden`}>
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
                  </div>
                  </div>
        </div>
    )
}
export default HomeHero;