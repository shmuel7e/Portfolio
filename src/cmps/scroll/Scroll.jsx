import React from "react";
import styles from "./styles.module.scss";
import { ImArrowDown2 } from "react-icons/im";

const Scroll = ({ direction, bottom = "-6rem", right, left, top }) => (
  <section
    className={`${styles.container}  ${styles[direction]}`}
    style={{ bottom: bottom, right: right, left: left, top: top }}
  >
    <div className={styles.txt}>Scroll</div>
    <div className={styles.txt}>Down</div>
    <div className={styles.arrow}>
      <ImArrowDown2 />
    </div>
  </section>
);
export default React.memo(Scroll);
