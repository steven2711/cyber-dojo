import Button from "./Button";
import styles from "../styles/CTA.module.css";

export default function CTA({ title, text, btnText, path }) {
  return (
    <div className={styles.cta}>
      <hr />
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={styles.btnBox}>
        <Button text={btnText} link={true} path={path} />
      </div>
      <hr />
    </div>
  );
}

CTA.defaultProps = {
  title: "insert a title",
  text: "insert some text",
  btnText: "button",
  path: "/",
};
