import Layout from "../../components/Layout";
import styles from "../../styles/WebsitesPage.module.css";
import Faq from "../../components/Faq";
import Button from "../../components/Button";

export default function WebsitesPage() {
  return (
    <Layout
      title="Websites | Cyber Dojo"
      description="Modern web design is about giving your customers an amazing online experience that ultimately leads them to one action; buy your product or service."
    >
      <div className={styles.container}>
        <div className={styles.showcase}>
          <h1>websites</h1>
          <p>
            Our primary goal is to build websites that help promote your
            businesses products or services.
          </p>
          <div className={styles.btnBox}>
            <Button
              text="get started"
              link={true}
              path="/websites/get-started"
            />
          </div>
        </div>
        <div className={styles.services}>
          <div className={styles.service}>
            <h2>research &amp; strategy</h2>
            <p>
              This is where we learn about your business and build a plan
              that&apos;s right for you.
            </p>
            <ul>
              <li>discovery</li>
              <li>information structure</li>
              <li>content strategy</li>
              <li>preliminary seo</li>
              <li>consulting</li>
            </ul>
          </div>

          <div className={styles.service}>
            <h2>branding</h2>
            <p>
              We collaborate with you to create a look that resonates with your
              potential customers and communicates your values as a business.
            </p>
            <ul>
              <li>logos</li>
              <li>copywriting</li>
              <li>color</li>
              <li>tone &amp; voice</li>
              <li>typography</li>
              <li>photography</li>
            </ul>
          </div>

          <div className={styles.service}>
            <h2>design</h2>
            <p>
              This phase combines what we&apos;ve learned into mock displays to
              give you an idea how your site will look. All design reviews and
              changes will happen in this phase.
            </p>
            <ul>
              <li>UI/UX design</li>
              <li>wireframing</li>
              <li>customer journey mapping</li>
              <li>reviews &amp; changes</li>
            </ul>
          </div>

          <div className={styles.service}>
            <h2>development</h2>
            <p>
              Time to build. We take your vision and bring it to life utilizing
              modern technologies and methodoligies.
            </p>
            <ul>
              <li>frontend development</li>
              <li>backend development</li>
              <li>web application development</li>
              <li>business software integrations</li>
              <li>digital marketing integrations</li>
              <li>search engine optimization</li>
            </ul>
          </div>

          <div className={styles.service}>
            <h2>launch &amp; review</h2>
            <p>We go live! </p>
            <ul>
              <li>hosting</li>
              <li></li>
              <li>tone &amp; voice</li>
              <li>typography</li>
              <li>photography</li>
            </ul>
          </div>

          <div className={styles.service}>
            <h2>maintenance</h2>
            <p>
              this is where we convert all of our research and branding
              materials into a mock-up.
            </p>
            <ul>
              <li>UI/UX design</li>
              <li></li>
              <li>tone &amp; voice</li>
              <li>typography</li>
              <li>photography</li>
            </ul>
          </div>
        </div>
        <div className={styles.faqBox}>
          <Faq />
        </div>
      </div>
    </Layout>
  );
}
