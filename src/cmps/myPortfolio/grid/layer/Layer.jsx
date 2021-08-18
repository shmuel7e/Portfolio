import React from "react";
import styles from "./styles.module.scss";

const Layer = () => (
  <div className={styles.imageBox}>
    <div className={styles.olyaBridal}></div>
    <div className={styles.overlay}></div>
    <div className={styles.content}>
      <p>View Project </p>
    </div>
  </div>
);
export default React.memo(Layer);
