import React from "react";
import styles from "./styles.module.scss";

const Button = ({ switchState }) => (
  <button
    className={`${styles.button} ${
      switchState ? styles.buttonWHITE : styles.buttonBLACK
    }`}
  >
    Contact me!
  </button>
);
export default React.memo(Button);
