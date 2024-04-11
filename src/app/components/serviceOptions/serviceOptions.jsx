import OptionsComponents from "../optionsComponents/optionComponent";
import styles from "./serviceOptions.module.css"
const ServiceOptions = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.firstText}>
                    We are your <span>trusted </span>companion on the journey to 
                    musculoskeletal wellness, offering <span>support</span>, 
                    <span> guidance</span>, and <span>empowerment</span> for your every step.
                
                </p>
                <p className={styles.secondText}>
                We’re setting a new standard of medical care for muscoskeletal challenges across all areas of the body.
                </p>
            </div>

            <div className={styles.boxContainer}>
                 <OptionsComponents 
                   optionImg="/mobile-app.png"
                   optionTopic="Medical Sessions"
                   optionDetails="An approach that offers you comprehensive medical care" />

                <OptionsComponents 
                   optionImg="/Doctor.png"
                   optionTopic="Competent Clinicians"
                   optionDetails="Clinicians are at the backend providing you with the best solution" />

                <OptionsComponents 
                   optionImg="/vehicle.png"
                   optionTopic="Swift Medical Attention"
                   optionDetails="Avoid waiting on a queue. Get medical care in less time" />
            </div>
        </div>
    )
}
export default ServiceOptions;