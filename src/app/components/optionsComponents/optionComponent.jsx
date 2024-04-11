import Image from "next/image";
import styles from "./optionsComponents.module.css"

const OptionsComponents = ({optionImg, optionTopic, optionDetails}) => {
    return (
        <div className={styles.optionContainer}>
            <div className={styles.imgContainer}>
           
           <div className={styles.optionImg}>
            <Image src={optionImg} alt={optionImg} width={55} height={55} />
           </div>
               </div>
           <p className={styles.optionTopic}>{optionTopic}</p>
           <p  className={styles.optionDetails}>{optionDetails}</p>
        </div>
    )
}
export default OptionsComponents;