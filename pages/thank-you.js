import Layout from "../components/Layout";
import styles from "../styles/ThankyouPage.module.css";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { FaToriiGate } from "react-icons/fa";
import { useEffect } from "react";

export default function ThankYouPage() {
  const router = useRouter();

  const { data } = router.query;

  // Used for condition thank you pages based on query params
  // const responses = [];

  // Reroutes to home if no params
  useEffect(() => {
    if (!data) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {!data ? null : (
        <Layout noIndex={true}>
          <section className={styles.container}>
            <FaToriiGate />
            <h1>Thank you</h1>
            <p>
              Someone will contact you within 24 to 36 hours of your request.
              Have a wonderful day!
            </p>
            <div className={styles.button}>
              <Button link={true} text="home page" path="/" />
            </div>
          </section>
        </Layout>
      )}
    </>
  );
}
