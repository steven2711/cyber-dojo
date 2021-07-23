import { websitesFaq as data } from "../data/websitesFaq";
import styles from "../styles/Faq.module.css";
import { useState } from "react";

export default function Faq() {
  const [faqs, setFaqs] = useState(data);

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <div className={styles.faq}>
      <h2>frequently asked questions</h2>
      {faqs.map(({ question, answer, open }, index) => (
        <div key={index} className={styles.group}>
          <div className={styles.questionBox} onClick={() => toggleFaq(index)}>
            <h3>{question}</h3>
            {open ? <div>-</div> : <div>+</div>}
          </div>
          <div className={open ? styles.answerBoxOpen : styles.answerBox}>
            <p>{answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
