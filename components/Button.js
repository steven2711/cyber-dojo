import styles from "../styles/Button.module.css";
import Link from "next/link";

export default function Button({ text, link, path }) {
  return (
    <>
      {link ? (
        <Link href={path}>
          <a className={styles.button}>{text}</a>
        </Link>
      ) : (
        <button type="button" className={styles.button}>
          {text}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  text: "button",
  link: false,
  path: "/",
};
