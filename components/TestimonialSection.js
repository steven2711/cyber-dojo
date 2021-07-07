import styles from "../styles/TestimonialSection.module.css";
import TestimonialBox from "./TestimonialBox";
import { testimonials } from "../data/testimonials";

export default function TestimonialSection() {
  return (
    <section className={styles.section}>
      <h2>testimonials</h2>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <TestimonialBox key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
