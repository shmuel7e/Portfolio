import React from "react";
import styles from "./styles.module.scss";

const SubTitle = ({ switchState }) => (
  <div
    className={`${styles.subTitle} ${
      switchState ? styles.subTitleWHITE : styles.subTitleBLACK
    }`}
  >
    {"Full Stack Web Engineer"}
  </div>
);
export default React.memo(SubTitle);
