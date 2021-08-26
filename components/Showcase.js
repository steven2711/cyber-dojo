import styles from "../styles/Showcase.module.css";
import Button from "../components/Button";

export default function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.showBox}>
        <h1>Building better online solutions for your business.</h1>
        <Button text="get started" link={true} path="/websites/get-started" />
      </div>
    </div>
  );
}
