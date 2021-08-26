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
      description="Cyber Dojo is an affordable solution for your website needs. We use modern practices and technoligies to build websites that help your business succeed. Call today!"
    >
      <div className={styles.showcase}>
        <h1>websites</h1>
        <p>
          A website isn&apos;t just an online brochure or a collection of pretty
          pictures — it&apos;s a 24/7 salesperson for your business. Get started
          today!
        </p>
        <div className={styles.btnBox}>
          <Button text="get started" link={true} path="/websites/get-started" />
        </div>
      </div>
      <div className={styles.main}>
        <section className={styles.copy}>
          <h2>does my business need a website?</h2>
          <p>
            With the explosion of consumer spending habits, small local
            businesses need to update their marketing strategies. A website is
            an indispensable building block of any company&apos;s online
            presence and should be ranked as one of the first goals when
            developing consumer outreach. A local business without a website is
            like a brick-and-mortar store without an address: the shop will be
            there, but unable to take part in most of today&apos;s shopping
            habits and trends.
          </p>
        </section>
        <section className={styles.copy}>
          <h2>what if my business already has a website?</h2>
          <p>
            That&apos;s great! You&apos;ve already taken the first step to
            getting your business in front of more customers. Keep in mind that
            today&apos;s websites have to be updated regularly to ensure search
            engines are indexing new content about your brand and products.
            Also, websites need to be mobile friendly. If your customers find it
            difficult to navigate your website on a mobile device, they may get
            frustrated and leave. It&apos;s always good to have a professional
            audit your site for any improvements or upgrades.
          </p>
        </section>
        <section className={styles.copy}>
          <h2>why choose cyber dojo?</h2>
          <p>
            It is our mission to provide our customers with impeccable service
            and custom websites that work. We educate each and every customer on
            possible website solutions based on their budget. Our process
            outlined below ensures you&apos;ll receive a website that will help
            your business succeed.
          </p>
        </section>
        <section className={styles.section}>
          <h2>our process</h2>
          <hr />
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
      </div>

      <CTA
        title="Ready to get started?"
        text=" Let us find out if our services are right for you! Fill out our client questionnaire to get started."
        btnText="get started"
        path="/websites/get-started"
      />

      <div className={styles.faqBox}>
        <Faq data={data} />
      </div>

      <ContactSection />
    </Layout>
  );
}
