import Layout from "../components/Layout";
import styles from "../styles/404.module.css";
import Button from "../components/Button";
import Link from "next/link";

export default function PageDoesNotExist() {
  return (
    <Layout>
      <div className={styles.errorPage}>
        <div className={styles.textBox}>
          <h1>Oops... looks like this page doesn&apos;t exist</h1>
          <p>What were you looking for?</p>
          <ul>
            <li>
              <Link href="/websites">
                <a>Websites</a>
              </Link>
            </li>
            <li>
              <Link href="/seo">
                <a>SEO</a>
              </Link>
            </li>
            <li>
              <Link href="/digital-marketing">
                <a>Digital Marketing</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div>
            <Button text="home page" link={true} path="/" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
