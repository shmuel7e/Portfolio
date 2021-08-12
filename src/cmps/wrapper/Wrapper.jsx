import React from "react";
import styles from "./styles.module.scss";

const Wrapper = ({ tag, children }) => (
  <section>
    <span className={styles.tag}>{`<${tag}>`}</span>
    <div className={styles.content}>{children}</div>
    <span className={styles.tag}>{`</${tag}>`}</span>
  </section>
);

export default React.memo(Wrapper);
