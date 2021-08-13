import React from "react";
import Logo from "../logo";
import styles from "./styles.module.scss";
import AnimatedLetter from "../animatedLetter";

const AnimatedTitle = () => (
  <section className={styles.title}>
    <div className={styles.first}>
      <AnimatedLetter letter={"H"} delay={0.1} />
      <AnimatedLetter letter={"i"} delay={0.2} />
      <AnimatedLetter letter={","} delay={0.3} z={100} />
    </div>
    <div className={styles.specialContainer}>
      <AnimatedLetter letter={"I'"} delay={0.4} />
      <AnimatedLetter letter={"m"} delay={0.6} z={80} />
      <span className={styles.special}>
        <Logo delay={0.45} z={100} />
        <AnimatedLetter letter={"h"} delay={0.8} />
        <AnimatedLetter letter={"m"} delay={0.9} />
        <AnimatedLetter letter={"u"} delay={1} />
        <AnimatedLetter letter={"e"} delay={1.1} />
        <AnimatedLetter letter={"l"} delay={1.2} />
        <AnimatedLetter letter={","} delay={1.3} z={80} />
      </span>
    </div>
    <div className={styles.last}>
      <div className={styles.lastP1}>
        <AnimatedLetter letter={"w"} delay={1.4} />
        <AnimatedLetter letter={"e"} delay={1.5} />
        <AnimatedLetter letter={"b"} delay={1.6} />
      </div>
      <div className={styles.lastP2}>
        <AnimatedLetter letter={"d"} delay={1.7} />
        <AnimatedLetter letter={"e"} delay={1.8} />
        <AnimatedLetter letter={"v"} delay={1.9} />
        <AnimatedLetter letter={"e"} delay={2} />
        <AnimatedLetter letter={"l"} delay={2.1} />
        <AnimatedLetter letter={"o"} delay={2.2} />
        <AnimatedLetter letter={"p"} delay={2.3} />
        <AnimatedLetter letter={"e"} delay={2.4} />
        <AnimatedLetter letter={"r"} delay={2.5} />
      </div>
    </div>
  </section>
);
export default React.memo(AnimatedTitle);
