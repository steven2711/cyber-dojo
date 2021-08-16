import styles from "../styles/Button.module.css";
import Link from "next/link";
import { FaToriiGate } from "react-icons/fa";

export default function Button({ text, link, path, type, isLoading, onClick }) {
  return (
    <>
      {link ? (
        <Link href={path}>
          <a className={styles.button}>{text}</a>
        </Link>
      ) : (
        <button type={type} className={styles.button} onClick={onClick}>
          {isLoading ? <FaToriiGate className={styles.btnIcon} /> : null}
          {text}
        </button>
      )}
    </>
  );
}

Button.defaultProps = {
  text: "button",
  type: "button",
  link: false,
  path: "/",
  isLoading: false,
  onClick: null,
};
