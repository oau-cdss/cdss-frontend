import Image from "next/image";
import styles from "./aboutCarousel.module.css"
import CarouselHome from "../carousel/carouselHome";

const AboutCarousel = () => {
    return (
        <div className={styles.container}>
            <div className={ styles.vector}>
                <Image src="/vector.png" alt="vector" width={120} height={100} />
            </div>

            <div className={styles.wrapper}>
           <p className={styles.title}>
           Our comprehensive sessions provides the right diagnosis and set you on the path to wholeness in no time.
           </p>

           <div>
               <CarouselHome/>
           </div>
            </div>
        </div>
    )
}
export default AboutCarousel;