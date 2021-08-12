import Layout from "../../components/Layout";
import styles from "../../styles/WebsitesPage.module.css";
import Faq from "../../components/Faq";
import Button from "../../components/Button";
import ContactSection from "../../components/ContactSection";
import { websitesFaq as data } from "../../data/websitesFaq";
import CTA from "../../components/CTA";

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
            If you have a small business but don't have a website, chances are
            your competitors do. You could try to compete without one but why?
            Using the power of the Internet can help your small business reach
            more customers. Hit the button below and fill out the questionaire
            to see how we can help!
          </p>
          <div className={styles.btnBox}>
            <Button
              text="get started"
              link={true}
              path="/websites/get-started"
            />
          </div>
        </div>
        <section>
          <h2>our process</h2>
          <div className={styles.services}>
            <div className={styles.service}>
              <h3>research &amp; strategy</h3>
              <p>
                This is where we learn about your business and build a plan
                that&apos;s aligns with your goals.
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
              <h3>branding</h3>
              <p>
                We collaborate with you to create a look that resonates with
                your potential customers and can communicate your values as a
                business.
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
              <h3>design</h3>
              <p>
                This phase combines what we&apos;ve learned into mock displays
                to give you an idea how your site will look. All design reviews
                and changes will happen in this phase.
              </p>
              <ul>
                <li>UI/UX design</li>
                <li>wireframing</li>
                <li>customer journey mapping</li>
                <li>reviews &amp; changes</li>
              </ul>
            </div>

            <div className={styles.service}>
              <h3>development</h3>
              <p>
                Time to build. We take your vision and bring it to life
                utilizing modern technologies and methodoligies.
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
              <h3>launch &amp; review</h3>
              <p>
                We go live! During this phase we make last minute changes and
                fix any bugs. Also, we provide any training needed to operate
                your new site.
              </p>
              <ul>
                <li>hosting</li>
                <li>security</li>
                <li>website testing</li>
                <li>customer feedback report</li>
                <li>search engine indexing</li>
              </ul>
            </div>

            <div className={styles.service}>
              <h3>support services</h3>
              <p>
                We become a trusted partner for your business. This option is
                great to ensure that your online efforts are running smoothly.
              </p>
              <ul>
                <li>site backups &amp; recovery</li>
                <li>software updates</li>
                <li>technical support &amp; troubleshooting</li>
                <li>design &amp; development tweaks</li>
                <li>content updates</li>
                <li>monthly reporting</li>
              </ul>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to get started?"
          text=" Let's find out if our services are right for you! Fill out our client questionnaire to get started."
          btnText="get started"
          path="/websites/get-started"
        />

        <div className={styles.faqBox}>
          <Faq data={data} />
        </div>
      </div>
      <ContactSection />
    </Layout>
  );
}
