import Layout from "../components/Layout";
import styles from "../styles/SolutionsPage.module.css";
import Button from "../components/Button";
import Faq from "../components/Faq";
import { solutionsFaq as data } from "../data/solutionsFaq";
import ContactSection from "../components/ContactSection";
import CTA from "../components/CTA";
import StatBox from "../components/StatBox";

export default function BusinessSolutionsPage() {
  return (
    <Layout
      title="Business Solutions | Cyber Dojo"
      description=" Cyber Dojo builds solutions specific to your business."
    >
      <div className={styles.showcase}>
        <h1>Business Solutions</h1>
        <p></p>
        <div className={styles.btnBox}>
          <Button text="contact us" link={true} path="/contact" />
        </div>
      </div>

      <div className={styles.main}>
        <section className={styles.section}>
          <h2>is there a pain point in your business?</h2>
        </section>

        <section className={styles.section}>
          <h2>solutions</h2>
        </section>

        <section className={styles.section}>
          <h2>what we offer</h2>
        </section>

        <section className={styles.section}>
          <h2>Pricing</h2>
          <div className={styles.prices}>cards here</div>
        </section>
      </div>
      <div className={styles.faqBox}>
        <Faq data={data} />
      </div>
      <ContactSection />
    </Layout>
  );
}
