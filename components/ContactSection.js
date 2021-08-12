import styles from "../styles/ContactSection.module.css";
import Button from "../components/Button";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <h2>let&apos;s talk business</h2>
      <p>
        Have a question about our services or would like to learn more? Contact
        us and we'll get back to you within 24 hours.
      </p>
      <Button text="contact us" link={true} path="/contact" />
    </section>
  );
}
