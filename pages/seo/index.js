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
          so you can focus on your business.
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
            Bing.
          </p>
          <p>
            Seems confusing? Don&apos;t worry, it&apos;s not as hard to
            understand as it sounds. Think of SEO as a way of getting found on
            the web. When people search for keywords related to your business,
            you want them to find your website. This is achieved by ranking
            higher than all the other results.
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
            text="In 2021 to date, Google accounted for just over 70% of all global
        desktop search traffic, followed by Baidu at 13%, Bing at 12%, and Yahoo
        at 2%. On the first page alone, the first five organic results account
        for 67.60% of all the clicks. These stats reveal that it pays to be
        listed on top!"
          />
          <p>
            This is why almost every local business needs to invest in good SEO
            practices to increase their visibility on the web. The more traffic
            you can get from search results, the higher your chances of having a
            successful business. By optimizing your site&apos;s SEO, you ensure
            that search engines have indexed and ranked your pages for relevant
            keywords that will help drive sales and leads.
          </p>
        </section>

        <section className={styles.section}>
          <h2>What can Cyber Dojo do for me?</h2>
          <p>
            Cyber Dojo provides SEO services so that businesses can succeed
            online with little hassle. We are familiar with a wide variety of
            SEO services and can guide clients in the right direction to avoid
            costly mistakes. We are very competitive, deliver quick results, and
            can easily be reached anytime for questions or issues via chat,
            email, and phone.
          </p>
          <p>
            <strong>
              WE CANNOT GAURANTEE YOUR BUSINESS WILL BE LISTED ON TOP OF SEARCH
              RESULTS!
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
            Prices can range from $300 to $2000 per month based on your
            company&apos;s objectives. Our contracts tailored for small
            businesses and can be used on a monthly, quarterly or yearly basis
            depending on the package you choose from. This means that you will
            have only one payment each month instead of multiple payments!
          </p>
          <p>
            The SEO packages we offer include everything from keyword research
            and on page SEO to link building and content creation. In addition,
            Cyber Dojo will provide monthly updates and advise you of anything
            that might be affecting your site rankings. Reach out to us for a
            more comprehensive list of our SEO offerings.
          </p>
          <p>
            Contact us today so we can show you what we can do for your
            business! If you need any help please don&apos;t hesitate to ask –
            it&apos;s free consultation. No strings attached, no obligation.
          </p>
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
