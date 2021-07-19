import styles from "../styles/ContactSection.module.css";
import Button from "../components/Button";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <h2>let&apos;s talk business</h2>
      <p>Send us a message to see if our sevices are right for you!</p>
      <Button text="contact us" link={true} path="/contact" />
    </section>
  );
}
