import React from "react";
import styles from "./styles.module.scss";
import Socials from "../socials";

const LogoImage = ({ switchState }) => (
  <div
    className={`${styles.logoStyle} ${
      switchState ? styles.logoStyleBLACK : styles.logoStyleWHITE
    }`}
  >
    S
  </div>
);

const Popup = ({ switchState, isOpen }) =>
  isOpen && (
    <section
      className={`${styles.popup} ${
        switchState ? styles.popupWHITE : styles.popupBLACK
      }`}
    >
      <div
        className={`${switchState ? styles.logWHITE : styles.logBLACK} ${
          styles.log
        }`}
      >
        <LogoImage switchState={switchState} />
        <h3 className={styles.title}>Shmuel</h3>
        <span className={styles.paragraph}>Web Developer</span>
      </div>
      <div
        className={`${styles.inside} ${
          switchState ? styles.insideWHITE : styles.insideBLACK
        }`}
      >
        <div></div>
        <div>
          <a href={"www.google.com"}>About</a>
        </div>
        <div>
          <a href={"www.google.com"}> My Skills</a>
        </div>
        <div>
          <a href={"www.google.com"}>Work</a>
        </div>
        <div>
          <a href={"www.google.com"}>Contact</a>
        </div>
      </div>
      <div className={styles.footer}>
        <Socials switchState={switchState} />
      </div>
    </section>
  );

export default React.memo(Popup);
