import Layout from "../components/Layout";
import styles from "../styles/ThankyouPage.module.css";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { FaToriiGate } from "react-icons/fa";
import { useEffect } from "react";

export default function ErrorPage() {
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
            <h1>Oops...</h1>
            <p>Looks like something went wrong on our end. Sorry for the inconvenience. Our team is on it!</p>
            <div className={styles.button}>
              <Button link={true} text="home page" path="/" />
            </div>
          </section>
        </Layout>
      )}
    </>
  );
}
