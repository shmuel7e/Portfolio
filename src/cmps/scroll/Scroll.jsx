import React from "react";
import styles from "./styles.module.scss";
import { ImArrowDown2 } from "react-icons/im";

const Scroll = ({ direction }) => (
  <section className={`${styles.container}  ${styles[direction]}`}>
    <div className={styles.txt}>Scroll</div>
    <div className={styles.txt}>Down</div>
    <div className={styles.arrow}>
      <ImArrowDown2 />
    </div>
  </section>
);
export default React.memo(Scroll);
