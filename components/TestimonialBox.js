import Image from "next/image";
import styles from "../styles/TestimonialBox.module.css";

export default function TestimonialBox({
  testimonial: { excerpt, name, title, imagePath },
}) {
  return (
    <div className={styles.box}>
      <div className={styles.imageBox}>
        <Image
          src={imagePath}
          alt={title}
          height={200}
          width={200}
          className={styles.image}
          layout="responsive"
        />
      </div>
      <div className={styles.info}>
        <p>{excerpt}</p>
        <div className={styles.infoTitle}>
          <p>
            <span>{name}</span>
          </p>
          <p>
            <span>{title}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
