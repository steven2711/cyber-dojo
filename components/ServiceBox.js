import styles from "../styles/ServiceBox.module.css";
import Button from "./Button";
import Image from "next/image";

export default function ServiceBox({
  service: { title, excerpt, description, path, imagePath },
}) {
  return (
    <div className={styles.service}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <h4>{excerpt}</h4>
        <p>{description}</p>
        <div className={styles.button}>
          <Button text={title} link path={path} />
        </div>
      </div>
      <div className={styles.image}>
        <Image src={imagePath} alt={title} height={375} width={500} />
      </div>
    </div>
  );
}
