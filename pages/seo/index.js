import Layout from "../../components/Layout";
import styles from "../../styles/SeoPage.module.css";
import Button from "../../components/Button";
import Faq from "../../components/Faq";
import { seoFaq as data } from "../../data/seoFaq";
import ContactSection from "../../components/ContactSection";
import CTA from "../../components/CTA";

export default function SeoPage() {
  return (
    <Layout
      title="SEO | Cyber Dojo"
      description="Cyber Dojo offers complete SEO services to help you better optimize your online presence and drive more traffic to your website."
    >
      <div className={styles.showcase}>
        <h1>SEO</h1>
        <p>
          The online world can be complicated — and so can managing your online
          presence. Cyber Dojo expertly manages your company’s SEO efforts, so
          you can focus on what matters most to you. Audit your site today to
          learn more about your SEO opportunities!
        </p>
        <div className={styles.btnBox}>
          <Button text="audit my site" link={true} path="/seo/audit" />
        </div>
      </div>
      <div className={styles.container}>
        <section className={styles.information}>
          <h2>what is seo?</h2>

          <p>
            So what exactly is SEO? Search Engine Optimization is the act of
            optimizing your business&apos;s website to meet certain criteria
            which will help it rank in search engines like Google, Yahoo, and
            Bing.
          </p>
          <p>
            A search engine is a tool that lets people find information on the
            Internet. Search engines have to decide which websites are the most
            important ones. When people use search engines, they typically start
            by typing in one or two words to describe something they need or
            want. The more times your website shows up when someone searches for
            those one or two words, the better chances someone will visit your
            site.
          </p>
          <h2>why is seo important for my businesses?</h2>
          <p>
            The Internet Age has made the demand for search engine optimization
            experts more acute than ever. In fact, more customers are using
            search engines to find products and services than ever before, which
            makes optimizing your business locally a high priority.
          </p>
          <p>
            In 2021 (to date), Google accounted for just over 70% of all global
            desktop search traffic, followed by Baidu at 13%, Bing at 12%, and
            Yahoo at 2%. On the first page alone, the first five organic results
            account for 67.60% of all the clicks. These stats basically state
            that it pays to be listed on top.
          </p>
          <p>
            SEO is the most cost effective strategy way for businesses to
            acquire new customers.
          </p>
          <h2>What can Cyber Dojo do for me?</h2>
          <p></p>
        </section>
        <CTA
          title="get your audit"
          text="It's no longer enough to just have a website, you need to put
            effort into making sure people can find you. Follow the link below for a free website audit on us!"
          btnText="audit my site"
        />
        <div className={styles.faqBox}>
          <Faq data={data} />
        </div>
      </div>
      <ContactSection />
    </Layout>
  );
}

// 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
