import Layout from "../../components/Layout";
import styles from "../../styles/SeoPage.module.css";
import Button from "../../components/Button";
import Faq from "../../components/Faq";
import { seoFaq as data } from "../../data/seoFaq";
import ContactSection from "../../components/ContactSection";
import CTA from "../../components/CTA";
import StatBox from "../../components/StatBox";

export default function SeoPage() {
  return (
    <Layout
      title="SEO | Cyber Dojo"
      description="Cyber Dojo specializes in search engine optimization. We offer professional services that include but are not limited to keyword research, link building, website analysis and registration. Call today for a free consultation."
    >
      <div className={styles.showcase}>
        <h1>SEO</h1>
        <p>
          The online world can be complicated — and so can managing your online
          presence. Cyber Dojo expertly manages your company&apos;s SEO efforts,
          so you can focus on what matters most to you.
        </p>
        <div className={styles.btnBox}>
          <Button text="audit my site" link={true} path="/seo/audit" />
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>what is seo?</h2>
          <p>
            So what exactly is SEO? Search Engine Optimization is the act of
            optimizing your business&apos;s website to meet certain criteria
            which will help it rank in search engines like Google, Yahoo, and
            Bing.
          </p>
          <p>
            Search engines are tools that let people find information on the
            Internet. They have to decide which websites are the most important
            through factors such as site speed, inbound links and quality
            content.
          </p>
          <StatBox
            text=" In 2021 to date, Google accounted for just over 70% of all global
        desktop search traffic, followed by Baidu at 13%, Bing at 12%, and Yahoo
        at 2%. On the first page alone, the first five organic results account
        for 67.60% of all the clicks. These stats reveal that it pays to be
        listed on top!"
          />
        </section>

        <section className={styles.section}>
          <h2>why is seo important for my businesses?</h2>
          <p>
            The Internet Age has made the demand for search engine optimization
            experts more acute than ever. In fact, more customers are using
            search engines to find products and services than ever before, which
            makes optimizing your business locally a high priority.
          </p>
          <p>
            SEO is the most cost effective strategy way for businesses to
            acquire new customers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What can Cyber Dojo do for me?</h2>
          <p>
            You’ve heard people talk about SEO but you’re not quite sure if it’s
            really effective as everyone seems to suggest. Naturally, you are
            perfectly capable of selling your services and products, but with
            more and more people beginning to take advantage of SEO to attract
            customers, you might be wondering if it&apos;s right for you.
          </p>
          <p></p>
        </section>
      </main>
      <CTA
        title="get your audit"
        text="It is no longer enough to just have a website, you need to put
            effort into making sure people can find you. Follow the link below for a free website audit on us!"
        btnText="audit my site"
      />
      <div className={styles.faqBox}>
        <Faq data={data} />
      </div>
      <ContactSection />
    </Layout>
  );
}

// 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
// vscode://vscode.github-authentication/did-authenticate?windowid=1&code=dabe23f43a3db27e1c05&state=45093232-8958-4412-ad86-a3606f32a367
