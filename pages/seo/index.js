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
      description="Cyber Dojo specializes in search engine optimization. We offer professional services that include but are not limited to keyword research, link building, and website analysis. Call today for a free consultation."
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

      <div className={styles.main}>
        <section className={styles.section}>
          <h2>what is seo?</h2>
          <p>
            So what exactly is SEO? Search Engine Optimization is the act of
            optimizing your business&apos;s website to meet certain criteria
            which will help it rank in search engines like Google, Yahoo, and
            Bing. Search engines have to decide which websites are the most
            important through various factors such as site speed, inbound links
            and quality content. The job of an SEO specialist is to fine-tune
            your website and digital content to capture search engine traffic
            and lead them to conversions.
          </p>
        </section>

        <section className={styles.section}>
          <h2>why is seo important for my business?</h2>
          <p>
            More customers are using search engines to find products and
            services than ever before, which makes optimizing your business
            locally a high priority.
          </p>
          <StatBox
            text=" In 2021 to date, Google accounted for just over 70% of all global
        desktop search traffic, followed by Baidu at 13%, Bing at 12%, and Yahoo
        at 2%. On the first page alone, the first five organic results account
        for 67.60% of all the clicks. These stats reveal that it pays to be
        listed on top!"
          />
          <p></p>
        </section>

        <section className={styles.section}>
          <h2>What can Cyber Dojo do for me?</h2>
          <p>
            We are passionate about online marketing and want to help people
            make their websites work for them. We are results driven. Once we
            understand your business goals, we strategize and create a plan that
            actually works.
          </p>
          <p>
            One thing to note though;{" "}
            <strong>
              WE CANNOT GAURANTEE YOUR BUSINESS WILL BE LISTED ON TOP!
            </strong>{" "}
            Unfortunate, but true. Be skeptical if anyone claims they can offer
            that as a gaurantee. It&apos;s not impossible. It just takes many
            years and constant SEO vigilance battling against competitors and
            search engine algorithms to get to the top.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Pricing</h2>
          <p>
            All pricing varies on your specific needs, but these packages can
            give you an idea what&apos;s offered.
          </p>
          <div className={styles.prices}>cards here</div>
        </section>
      </div>
      <CTA
        title="get your audit"
        text="It is no longer enough to just have a website, you need to put
            effort into making sure people can find you. Follow the link below for a free website audit on us!"
        btnText="audit my site"
        path="/seo/audit"
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
