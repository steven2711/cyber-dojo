import Layout from "../components/Layout";
import styles from "../styles/MarketingPage.module.css";
import Button from "../components/Button";
import Faq from "../components/Faq";
import { marketingFaq as data } from "../data/marketingFaq";
import ContactSection from "../components/ContactSection";
import CTA from "../components/CTA";
import StatBox from "../components/StatBox";

export default function DigitalMarketingPage() {
  return (
    <Layout title="Digital Marketing | Cyber Dojo" description="">
      <div className={styles.showcase}>
        <h1>Digital Marketing</h1>
        <p></p>
        <div className={styles.btnBox}>
          <Button text="contact us" link={true} path="/contact" />
        </div>
      </div>

      <div className={styles.main}>
        <section className={styles.section}>
          <h2>why digital marketing is important</h2>
        </section>

        <section className={styles.section}>
          <h2>how does digital marketing help small businesses?</h2>
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
