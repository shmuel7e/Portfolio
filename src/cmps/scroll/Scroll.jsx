import React from "react";
import styles from "./styles.module.scss";
import { ImArrowDown2 } from "react-icons/im";

const Scroll = ({ direction, bottom = "-6rem", right, left, top,switchState }) => (
  <section
    className={`${styles.container}  ${styles[direction]}`}
    style={{ bottom: bottom, right: right, left: left, top: top }}
  >
    <div className={`${styles.txt} ${switchState ? styles.WHITE : styles.BLACK}`}>Scroll</div>
    <div className={`${styles.txt} ${switchState ? styles.WHITE : styles.BLACK}`}>Down</div>
    <div className={`${styles.arrow} ${switchState ? styles.WHITE:styles.BLACK}`}>
      <ImArrowDown2 />
    </div>
  </section>
);
export default React.memo(Scroll);
