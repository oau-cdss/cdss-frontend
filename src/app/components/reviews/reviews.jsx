import ReviewsComponents from "../reviewsComponents/reviewsComponents";
import styles from "./reviews.module.css"
import CustomerReview from "./customerReview"
import reviews from "../../../database/reviews.json"
import CustomerreviewCarousel from "./customersReviewCarousel";


const Reviews = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
            <p className={styles.firstText}>
            Find out what CDSS medical care can do for you.
            </p>

            <p className={styles.secondText}>
            CDSS works with you to offer a new kind of medical care that covers every Muscoskeletal challenges.
            </p>
            </div>

            <div className={styles.reviewContainer}>
                <ReviewsComponents 
                   optionImg="/sthethoscope.png"
                   optionTopic="Proper Diagnosis"
                   optionDetails="Sessions are tailored to properly diagnose your health challenge" />

                <ReviewsComponents 
                   optionImg="/time.png"
                   optionTopic="Swift Responses"
                   optionDetails="Get feedback in less time. No need to wait on a queue" />

                <ReviewsComponents 
                   optionImg="/Doctor.png"
                   optionTopic="Experienced Clinicians"
                   optionDetails="There are qualified personnel at the backend attending to you." />
            </div>

            <div className={styles.slideContainer}>
                <p className={styles.slideTopic}>
                  WHAT CLIENTS SAY ABOUT CDSS
                </p>

                <div>
                    <CustomerreviewCarousel data={reviews} loop>

                    {reviews.map((rev, i) => {
                        return (
                            <div className="relative h-64 flex-[0_0_100%]" key={i}>
    <CustomerReview
      key={i}
      content={rev.CustomersReview}
      name={rev.customersName}
    />
    </div>)
})}
  </CustomerreviewCarousel>
                </div>
            </div>
        </div>
    )
}
export default Reviews;