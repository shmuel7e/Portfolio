import React from "react";
import styles from "./styles.module.scss";

const SubTitle = () => (
  <div className={styles.subTitle}>{" Full Stack Web Developer"}</div>
);
export default React.memo(SubTitle);
