import styles from "./TestimonialCard.module.css";
import { Testimonial } from "@/data/testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type Props = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className={`${styles["testimonial-card"]} bordered`}>
      <p className={styles["testimonial-quote"]}>
        <span className={styles["quote-start"]}>&quot;</span>
        {/* <br /> */}
        {testimonial.quote}
        {/* <br /> */}
        <span className={styles["quote-end"]}>&quot;</span>
      </p>
      <div className={styles["stars"]}>
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={styles["star-icon"]}
          />
        ))}
      </div>
      <span className={`${styles["author-name"]} bordered`}>
        - {testimonial.author}
      </span>
    </div>
  );
};
export default TestimonialCard;
