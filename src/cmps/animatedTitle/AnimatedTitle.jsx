import React from "react";
import Logo from "../logo";
import styles from "./styles.module.scss";
import AnimatedLetter from "../animatedLetter";

const AnimatedTitle = ({ switchState }) => (
  <section
    className={`${styles.title} ${
      switchState ? styles.titleWHITE : styles.titleBLACK
    }`}
  >
    <div className={styles.first}>
      <AnimatedLetter switchState={switchState} letter={"H"} delay={0.1} />
      <AnimatedLetter switchState={switchState} letter={"i"} delay={0.2} />
      <AnimatedLetter switchState={switchState} letter={","} delay={0.3} left={-4} z={100} />
    </div>
    <div className={styles.specialContainer}>
      <AnimatedLetter switchState={switchState} letter={"I"} delay={0.4} />
      <AnimatedLetter switchState={switchState} letter={"'"} delay={0.5} left={-2} fontFamily={"serif"} />
      <AnimatedLetter switchState={switchState} letter={"m"} delay={0.6} z={80} />
      <span className={styles.special}>
        <Logo switchState={switchState} delay={0.45} z={100} />
        <AnimatedLetter switchState={switchState} letter={"h"} delay={0.8} />
        <AnimatedLetter switchState={switchState} letter={"m"} delay={0.9} />
        <AnimatedLetter switchState={switchState} letter={"u"} delay={1} />
        <AnimatedLetter switchState={switchState} letter={"e"} delay={1.1} />
        <AnimatedLetter switchState={switchState} letter={"l"} delay={1.2} />
        <AnimatedLetter switchState={switchState} letter={","} delay={1.3} left={-4} z={80} />
      </span>
    </div>
    <div className={styles.last}>
      <div className={styles.lastP1}>
        <AnimatedLetter switchState={switchState} letter={"w"} delay={1.4} />
        <AnimatedLetter switchState={switchState} letter={"e"} delay={1.5} />
        <AnimatedLetter switchState={switchState} letter={"b"} delay={1.6} />
      </div>
      <div className={styles.lastP2}>
        <AnimatedLetter switchState={switchState} letter={"d"} delay={1.7} />
        <AnimatedLetter switchState={switchState} letter={"e"} delay={1.8} />
        <AnimatedLetter switchState={switchState} letter={"v"} delay={1.9} />
        <AnimatedLetter switchState={switchState} letter={"e"} delay={2} />
        <AnimatedLetter switchState={switchState} letter={"l"} delay={2.1} />
        <AnimatedLetter switchState={switchState} letter={"o"} delay={2.2} />
        <AnimatedLetter switchState={switchState} letter={"p"} delay={2.3} />
        <AnimatedLetter switchState={switchState} letter={"e"} delay={2.4} />
        <AnimatedLetter switchState={switchState} letter={"r"} delay={2.5} />
      </div>
    </div>
  </section>
);
export default React.memo(AnimatedTitle);
