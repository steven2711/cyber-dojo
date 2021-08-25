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
      description="Cyber Dojo offers affordable software solutions that can take the pain out of everyday business processes. Call today for a free consultation."
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
          <h2>What are business solutions?</h2>
        </section>

        <section className={styles.section}>
          <h2>How can we make your life easier?</h2>
        </section>

        <section className={styles.section}>
          <h2>What are the benefits?</h2>
          <ul>
            <li>You&apos;ll save time on your business operations.</li>
            <li>Be more efficient with your time.</li>
            <li>
              Start seeing a return on investment in weeks, not months or years.
            </li>
            <li>
              You&apos;ll get a solution that&apos;s tailored to your needs.
            </li>
            <li>We&apos;re affordable and accessible.</li>
            <li>Save time on data entry and tedious tasks.</li>
            <li></li>
            <li></li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>what we can do</h2>
        </section>
      </div>
      <div className={styles.faqBox}>
        <Faq data={data} />
      </div>
      <ContactSection />
    </Layout>
  );
}
