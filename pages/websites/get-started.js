import Layout from "../../components/Layout";
import Button from "../../components/Button";
import styles from "../../styles/GetStarted.module.css";
import { useState } from "react";
import { NEXT_URL } from "../../config";
import { useRouter } from "next/router";

export default function GetStartedPage() {
  const router = useRouter();

  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
    question11: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setClientInfo((prevalue) => {
      return { ...prevalue, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const res = await fetch(`${NEXT_URL}/api/get-started`, {
      method: "POST",
      body: JSON.stringify(clientInfo),
    });

    const data = await res.json();

    if (res.ok) {
      setIsLoading(false);
      router.push({
        pathname: "/thank-you",
        query: { data: "clientForm" },
      });
    } else {
      setIsLoading(false);
      console.log(data);
      router.push({
        pathname: "/error",
        query: { data: "clientFormError" },
      });
    }

    setClientInfo({
      name: "",
      email: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      question10: "",
      question11: "",
    });
  };

  return (
    <Layout title="Get Started | Cyber Dojo" description="">
      <div className={styles.getStarted}>
        <div className={styles.showcase}>
          <h1>get started</h1>
          <p>
            Let&apos;s learn about your business to see if our services are
            right for you!
          </p>
        </div>

        <div className={styles.formBox}>
          <h2>client questionnaire</h2>
          <form method="POST" onSubmit={handleSubmit}>
            <div className={styles.formgroup}>
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                aria-describedby="name"
                name="name"
                minLength="2"
                value={clientInfo.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="email">email address</label>
              <input
                type="email"
                id="email"
                aria-describedby="email"
                name="email"
                minLength="5"
                value={clientInfo.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question1">
                What does your business do? Sell products/services?
              </label>
              <textarea
                id="question1"
                aria-describedby="question1"
                name="question1"
                value={clientInfo.question1}
                onChange={handleChange}
                rows="7"
                minLength="5"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question2">
                Who is your target market/audience?
              </label>
              <textarea
                id="question2"
                aria-describedby="question2"
                name="question2"
                value={clientInfo.question2}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question3">
                What is your main goal for a website visitor? To place an order,
                request a consultation, get their email, etc
              </label>
              <textarea
                id="question3"
                aria-describedby="question3"
                name="question3"
                value={clientInfo.question3}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question4">
                How much is an average client worth to your business? What is
                the average sales price of a product?
              </label>
              <textarea
                id="question4"
                aria-describedby="question4"
                name="question4"
                value={clientInfo.question4}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question5">
                Do you have a budget set aside for this project? If so, how
                much?
              </label>
              <textarea
                id="question5"
                aria-describedby="question5"
                name="question5"
                value={clientInfo.question5}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question6">
                How do you typically get/acquire new clients?
              </label>
              <textarea
                id="question6"
                aria-describedby="question6"
                name="question6"
                value={clientInfo.question6}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question7">
                How many clients do you get on average per month? How many
                products do you sale on average per month?
              </label>
              <textarea
                id="question7"
                aria-describedby="question7"
                name="question7"
                value={clientInfo.question7}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question8">
                Do you have professional images and a brand identity?
              </label>
              <textarea
                id="question8"
                aria-describedby="question8"
                name="question8"
                value={clientInfo.question8}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question9">
                When would you like the project completed by?
              </label>
              <textarea
                id="question9"
                aria-describedby="question9"
                name="question9"
                value={clientInfo.question9}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question10">
                Is there anything else you’d like to let me know about?
              </label>
              <textarea
                id="question10"
                aria-describedby="question10"
                name="question10"
                value={clientInfo.question10}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.formgroup}>
              <label htmlFor="question11">
                Do you have any questions for me?
              </label>
              <textarea
                id="question11"
                aria-describedby="question11"
                name="question11"
                value={clientInfo.question11}
                onChange={handleChange}
                minLength="5"
                rows="7"
                required
              />
            </div>

            <div className={styles.btnBox}>
              <Button
                text="submit request"
                type="submit"
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
