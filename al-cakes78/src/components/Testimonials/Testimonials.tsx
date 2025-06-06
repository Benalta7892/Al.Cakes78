import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";
import TESTIMONIALS from "@/data/testimonial";

const Testimonials = () => {
  return (
    <section className={styles["testimonials-section"]}>
      <h2>Merci pour votre confiance</h2>

      <div className={styles["testimonials-grid"]}>
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={testimonial.id} className={styles[`div${index + 1}`]}>
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
