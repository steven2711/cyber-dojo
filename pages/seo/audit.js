import Layout from "../../components/Layout";
import styles from "../../styles/AuditPage.module.css";
import Button from "../../components/Button";
import ContactSection from "../../components/ContactSection";
import { useState } from "react";
import Loader from "../../components/Loader";
import { FaToriiGate } from "react-icons/fa";
import { urlTrim } from "../../helpers";
import { NEXT_URL } from "../../config";

export default function SeoAuditPage() {
  const [auditInfo, setAuditInfo] = useState({
    url: "",
    email: "",
  });

  const [auditResults, setAuditResults] = useState(null);
  const [urlValidation, setUrlValidation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openResults = (auditResult) => {
    let newWindow = window.open();
    newWindow.document.write(auditResult);
  };

  const handleChange = (e) => {
    setAuditInfo((prevalue) => {
      return { ...prevalue, [e.target.name]: e.target.value };
    });
  };

  const errorHandler = (msg) => {
    setUrlValidation(msg);

    setTimeout(() => {
      setUrlValidation(null);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const trimmedUrl = urlTrim(auditInfo.url);

    const devRoute = "http://localhost:5000/test";
    const productionRoute = "https://lighthouse-audit.herokuapp.com/test";

    try {
      const res = await fetch(productionRoute, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ url: trimmedUrl }),
      });

      if (res.ok) {
        const result = await res.text();
        setAuditResults(result);
        setIsLoading(false);
      } else {
        const { msg } = await res.json();
        setIsLoading(false);
        errorHandler(msg);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    try {
      const res = await fetch(`https://www.cyberdojo.co/api/lighthouse`, {
        method: "POST",
        body: JSON.stringify(auditInfo),
      });

      if (res.ok) {
        console.log("Message sent!");
      }
    } catch (error) {
      console.log(error);
    }

    setAuditInfo({
      url: "",
      email: "",
    });
  };

  return (
    <Layout
      title="Audit | Cyber Dojo"
      description="Get a free website audit from Cyber Dojo. We analyze your site, identify issues and provide recommendations to improve search engine rankings. Schedule an appointment today!"
    >
      <div className={styles.showcase}>
        <h1>Audit</h1>
        <p>
          This is a basic audit that will give you an idea about your
          website&apos;s health. Contact us if you have questions or would like
          a more comprehensive audit.
        </p>
      </div>
      <section className={styles.section}>
        {!auditResults && !isLoading ? (
          <form method="POST" onSubmit={handleSubmit} className={styles.form}>
            <p>Please enter the URL in the correct format.</p>
            <div className={styles.formgroup}>
              <label htmlFor="url">URL</label>
              <input
                type="text"
                id="url"
                aria-describedby="enter url"
                name="url"
                placeholder="Ex. google.com"
                value={auditInfo.url}
                onChange={handleChange}
                minLength="5"
                required
              />
              {urlValidation ? <span>{urlValidation}</span> : null}
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                aria-describedby="enter email"
                name="email"
                value={auditInfo.email}
                onChange={handleChange}
                minLength="5"
                required
              />
            </div>
            <div className={styles.btnBox}>
              <Button text="submit audit" type="submit" isLoading={isLoading} />
            </div>
          </form>
        ) : !auditResults && isLoading ? (
          <div className={styles.loadingWindow}>
            <p>Please wait. It may take up to 30 seconds to process...</p>
            <Loader />
          </div>
        ) : auditResults && !isLoading ? (
          <div className={styles.resultWindow}>
            <FaToriiGate />
            <p>Your results are ready!</p>
            <Button
              text="see results"
              type="button"
              onClick={() => openResults(auditResults)}
            />
          </div>
        ) : null}
      </section>
      <ContactSection />
    </Layout>
  );
}
