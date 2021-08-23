import Layout from "../components/Layout";
import styles from "../styles/MarketingPage.module.css";
import Button from "../components/Button";
import Faq from "../components/Faq";
import { marketingFaq as data } from "../data/marketingFaq";
import ContactSection from "../components/ContactSection";
import CTA from "../components/CTA";

export default function DigitalMarketingPage() {
  return (
    <Layout
      title="Digital Marketing | Cyber Dojo"
      description="Cyber Dojo offers customized, strategic and creative digital marketing services. Call today for a free consultation!"
    >
      <div className={styles.showcase}>
        <h1>Digital Marketing</h1>
        <p>
          We offer customized, strategic, and creative digital marketing
          services.
        </p>
        <div className={styles.btnBox}>
          <Button text="contact us" link={true} path="/contact" />
        </div>
      </div>

      <div className={styles.main}>
        <section className={styles.section}>
          <h2>why is digital marketing important?</h2>
          <p>
            From ancient times marketing has always been a very important part
            of business. Just think about it—How could you sell anything without
            letting people know that it&apos;s available? In the past, this was
            done through word of mouth or by putting up advertisements in public
            areas. As new media and technology developed, business advertisers
            turned to TV and radio commercials for direct communication in order
            to get their messages across with an increasingly distracted
            audience.
          </p>
          <p>
            Today all of these traditional methods are pretty much obsolete with
            the introduction of Internet advertising! Digital marketing is an
            umbrella term for various activities involved in promoting
            products/services through digital channels. Digital channels
            include: websites, email and mobile SMS text message ads, online
            videos, social media etc…
          </p>
        </section>

        <section className={styles.section}>
          <h2>how does digital marketing help small businesses?</h2>
          <p>
            Small businesses have a lot to stand for; they pick up where the big
            players leave off. In many cases the products and services of small
            business compete with those offered by mass marketing enterprises,
            but on a smaller scale. For example, small businesses in artistic
            fields can create unique works and focus on personal attention.
            Small businesses can also be more responsive to customer
            requirements due to their flexible nature.
          </p>
          <p>
            All this means that small businesses need not lag behind when it
            comes to advertising! Digital marketing allows you to reach
            potential customers all over the world or in your local area via
            World Wide Web at relatively low cost.
          </p>
          <p>
            You may get some specific benefits from digital marketing tactics
            such as:
          </p>
          <ul>
            <li>Enhanced brand recognition</li>
            <li>Increased traffic volume</li>
            <li>Faster response time to market changes</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>why use cyber dojo?</h2>
          <p>
            Cyber Dojo wants to see your business thrive and we have the
            experience to help you make your goals a reality. We utilize modern
            technologies and marketing strategies that will help you capture the
            attention of consumers and turn them into potential customers.
          </p>
          <p>
            No matter what kind of business you are running, the bottom line is
            profit. If you are spending money on digital marketing – which
            includes internet advertising and online video – it has to pay off
            eventually. Our expertise in small business digital marketing means
            that even if you have not used these kinds of services before, we
            will be able to show you real results for your investment.
          </p>
        </section>

        <section className={styles.section}>
          <h2>what we offer</h2>
          <p>
            Digital marketing covers a vast array of categories and the focus
            all depends upon your strategy, budget, and resources. Here are a
            few things we can offer:
          </p>
          <ul>
            <li>Content Development / Creation &amp; Optimization</li>
            <li>Social Media Marketing</li>
            <li>Video Marketing</li>
            <li>Paid Marketing</li>
          </ul>
        </section>
      </div>
      <CTA
        title="learn more"
        text="Contact us today to learn more about how we can help you succeed in the digital marketing arena."
        btnText="contact us"
        path="/contact"
      />
      <div className={styles.faqBox}>
        <Faq data={data} />
      </div>
      <ContactSection />
    </Layout>
  );
}
