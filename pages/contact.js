import Layout from "../components/Layout";
import Button from "../components/Button";
import styles from "../styles/ContactPage.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "../config";

export default function ContactPage() {
  const router = useRouter();

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setContactInfo((prevalue) => {
      return { ...prevalue, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await fetch(`https://www.cyberdojo.co/api/contact`, {
      method: "POST",
      body: JSON.stringify(contactInfo),
    });

    const data = await res.json();

    if (res.ok) {
      setIsLoading(false);
      router.push({
        pathname: "/thank-you",
        query: { data: "contact" },
      });
    } else {
      setIsLoading(false);
      console.log(data);
      router.push({
        pathname: "/error",
        query: { data: "contactFormError" },
      });
    }

    setContactInfo({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Layout
      title="Contact | Cyber Dojo"
      description="Send us a message to see if our sevices are right for you! Our goal
    is to ensure you choose the best option for your business needs. Fill out the form on this page to get started!"
    >
      <div className={styles.contact}>
        <div className={styles.showcase}>
          <h1>contact us</h1>
          <p>
            Let&apos;s talk! Even if your needs are outside of our abilities, we
            are happy to point you in the right direction. Fill out the form
            below to get started!
          </p>
        </div>

        <h2>contact form</h2>

        <form method="POST" onSubmit={handleSubmit}>
          <div className={styles.formgroup}>
            <label htmlFor="name">
              name<span>*</span>
            </label>
            <input
              type="text"
              id="name"
              aria-describedby="enter name"
              placeholder="Name"
              name="name"
              value={contactInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="email">
              email address<span>*</span>
            </label>
            <input
              type="email"
              id="email"
              aria-describedby="enter email"
              placeholder="Email"
              name="email"
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
              minLength="5"
              value={contactInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="phone">
              phone number<span>*</span>
            </label>
            <span className={styles.example}>Example: 555-555-5555</span>
            <input
              type="tel"
              id="phone"
              aria-describedby="enter phone number"
              placeholder="Phone"
              name="phone"
              value={contactInfo.phone}
              minLength="9"
              pattern="^(1-)?\d{3}-\d{3}-\d{4}$"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="subject">
              What are you interested in?<span>*</span>
            </label>

            <div className={styles.radioSection}>
              <div>
                <input
                  type="radio"
                  id="general-question"
                  aria-describedby="general question"
                  name="subject"
                  value="General Question"
                  checked={contactInfo.subject === "General Question"}
                  onChange={handleChange}
                />
                <label htmlFor="general-question">general question</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="web-development"
                  aria-describedby="website design and development"
                  name="subject"
                  value="Website Design and Development"
                  checked={
                    contactInfo.subject === "Website Design and Development"
                  }
                  onChange={handleChange}
                />
                <label htmlFor="web-development">
                  website design and development
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="seo"
                  aria-describedby="seo (search engine optimization)"
                  name="subject"
                  value="SEO"
                  checked={contactInfo.subject === "SEO"}
                  onChange={handleChange}
                />
                <label htmlFor="seo">seo (search engine optimization)</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="digital-marketing"
                  aria-describedby="digital marketing"
                  name="subject"
                  value="Digital Marketing"
                  checked={contactInfo.subject === "Digital Marketing"}
                  onChange={handleChange}
                />
                <label htmlFor="digital-marketing">digital marketing</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="consultation"
                  aria-describedby="consultation"
                  name="subject"
                  value="Consultation"
                  checked={contactInfo.subject === "Consultation"}
                  onChange={handleChange}
                />
                <label htmlFor="consultation">consultation</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="multiservice"
                  aria-describedby="multiple services"
                  name="subject"
                  value="Multi-Service"
                  checked={contactInfo.subject === "Multi-Service"}
                  onChange={handleChange}
                />
                <label htmlFor="multiservice">Multiple Services</label>
              </div>
            </div>
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="message">
              message<span>*</span>
            </label>
            <textarea
              className="form-control"
              type="text"
              id="message"
              rows="10"
              name="message"
              value={contactInfo.message}
              onChange={handleChange}
              required
              minLength="5"
            ></textarea>
          </div>

          <div className={styles.btnBox}>
            <Button text="submit form" type="submit" isLoading={isLoading} />
          </div>
        </form>
      </div>
    </Layout>
  );
}
