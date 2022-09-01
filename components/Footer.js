import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <p>Built by</p>
        <h2>Cyber Dojo</h2>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <Link href="/websites">
              <a>websites</a>
            </Link>
          </li>
          <li>
            <Link href="/websites/get-started">
              <a>client questionnaire</a>
            </Link>
          </li>
          <li>
            <Link href="/seo">
              <a>seo</a>
            </Link>
          </li>
          <li>
            <Link href="/seo/audit">
              <a>free audit</a>
            </Link>
          </li>
          <li>
            <Link href="/digital-marketing">
              <a>digital marketing</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>contact us</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.disc}>
        <ul>
          <li>
            <Link href="/">
              <a>privacy policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>terms of service</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.socials}>
        <a href="https://www.facebook.com/Cyber-Dojo-101691402294057" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <FaInstagram />
      </div>
      {/* <div>
        <a href="payload.apk" download>
          .
        </a>
      </div> */}
    </footer>
  );
}
