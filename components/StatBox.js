import styles from "../styles/StatBox.module.css";

export default function StatBox({ text }) {
  return (
    <div className={styles.box}>
      <p>{text}</p>
    </div>
  );
}
