import Layout from "../components/Layout";
import Button from "../components/Button";
import styles from "../styles/ContactPage.module.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { NEXT_URL } from "../config";

export default function ContactPage() {
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

    const res = await fetch(`${NEXT_URL}/api/contact`, {
      method: "POST",
      body: JSON.stringify(contactInfo),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("We got your message!");
      setIsLoading(false);
    } else {
      toast.error("Oops... something went wrong!");
      setIsLoading(false);
    }

    setContactInfo({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // if (res.ok) {

  return (
    <Layout title="Contact | Cyber Dojo">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      <div className={styles.contact}>
        <div className={styles.showcase}>
          <h1>contact us</h1>
          <p>
            Send us a message to see if our sevices are right for you! Our goal
            is to ensure you choose the best option for your business needs.
            Even if your needs are outside of our abilities, we are happy to
            point you in the right direction. Fill out the form below to get
            started!
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
              value={contactInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="phone">
              phone number<span>*</span>
            </label>
            <input
              type="tel"
              id="phone"
              aria-describedby="enter phone number"
              placeholder="Phone"
              name="phone"
              value={contactInfo.phone}
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
