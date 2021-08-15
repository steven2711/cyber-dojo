import Layout from "../../components/Layout";
import styles from "../../styles/AuditPage.module.css";
import Button from "../../components/Button";
import ContactSection from "../../components/ContactSection";
import { useState } from "react";
import { NEXT_URL } from "../../config";

export default function SeoAuditPage() {
  const [auditInfo, setAuditInfo] = useState({
    url: "",
    email: "",
  });

  const [auditResults, setAuditResults] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setAuditInfo((prevalue) => {
      return { ...prevalue, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await fetch(`${NEXT_URL}/api/lighthouse`, {
      method: "POST",
      body: JSON.stringify(auditInfo),
    });

    if (res.ok) {
      const result = await res.text();
      // setAuditResults(result);

      let newWindow = window.open();

      newWindow.document.write(result);

      setIsLoading(false);
    } else {
      console.log(res);
      setIsLoading(false);
    }

    setAuditInfo({
      url: "",
      email: "",
    });
  };

  return (
    <Layout title="Audit | Cyber Dojo" description="">
      <div className={styles.showcase}>
        <h1>Audit</h1>
        <p>This is a basic audit for your website.</p>
      </div>
      <section className={styles.section}>
        <h2>details about this audit</h2>
        <form method="POST" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formgroup}>
            <label htmlFor="url">URL</label>
            <input
              type="text"
              id="url"
              aria-describedby="enter url"
              name="url"
              value={auditInfo.url}
              onChange={handleChange}
              required
            />
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
              required
            />
          </div>
          <div className={styles.btnBox}>
            <Button text="submit form" type="submit" isLoading={isLoading} />
          </div>
        </form>
      </section>

      <ContactSection />
    </Layout>
  );
}
