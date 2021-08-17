import Layout from "../../components/Layout";
import styles from "../../styles/AuditPage.module.css";
import Button from "../../components/Button";
import ContactSection from "../../components/ContactSection";
import { useState } from "react";
import Loader from "../../components/Loader";
import { FaToriiGate } from "react-icons/fa";
import { urlValidationAndFix } from "../../helpers";
import { NEXT_URL } from "../../config";

export default function SeoAuditPage() {
  const [auditInfo, setAuditInfo] = useState({
    url: "",
    email: "",
  });

  const [auditResults, setAuditResults] = useState(null);
  const [error, setError] = useState(false);
  const [urlValidation, setUrlValidation] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!urlValidationAndFix(auditInfo.url)) {
      setUrlValidation(true);
      setAuditInfo((prevalue) => {
        return { ...prevalue, url: "" };
      });

      setTimeout(() => {
        setUrlValidation(false);
      }, 5000);
    } else {
      setIsLoading(true);

      const cleanUrl = urlValidationAndFix(auditInfo.url);

      try {
        const res = await fetch(
          `https://lighthouse-audit.herokuapp.com/${cleanUrl}`,
          {
            method: "GET",
          }
        );

        if (res.ok) {
          const result = await res.text();
          setAuditResults(result);

          setIsLoading(false);
        } else {
          console.log(res);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }

      try {
        const res = await fetch(`${NEXT_URL}/api/lighthouse`, {
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
    }
  };

  return (
    <Layout title="Audit | Cyber Dojo" description="">
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
              {urlValidation ? <span>Please use requested format</span> : null}
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
