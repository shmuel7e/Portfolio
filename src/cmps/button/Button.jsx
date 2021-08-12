import React from "react";
import styles from "./styles.module.scss";

const Button = () => <button className={styles.button}>Contact me!</button>;
export default React.memo(Button);
