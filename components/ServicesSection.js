import styles from "../styles/ServicesSection.module.css";
import ServiceBox from "./ServiceBox";
import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <h2>our services</h2>
      {services.map((service, index) => (
        <ServiceBox key={index} service={service} />
      ))}
    </section>
  );
}
