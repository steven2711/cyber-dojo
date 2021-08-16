import React from "react";
import styles from "../styles/Loader.module.css";
import { FaToriiGate } from "react-icons/fa";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <FaToriiGate />
    </div>
  );
}
