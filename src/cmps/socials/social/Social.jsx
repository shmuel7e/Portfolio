import React from "react";
import styles from "./styles.module.scss";

const Social = ({ Icon, onClick, className, switchState }) => (
  <div
    className={`${styles.social} ${styles[className]} ${
      switchState ? styles.white : styles.black
    }`}
    onClick={onClick}
  >
    {Icon}
  </div>
);

export default React.memo(Social);
