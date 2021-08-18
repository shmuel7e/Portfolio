import React from "react";
import styles from "./styles.module.scss";
import AnimatedLetter from "../animatedLetter";
import Wrapper from "../wrapper";
import Grid from "./grid";

const MyPortfolio = () => {
  return (
    <section id={"id"} className={styles.container}>
      <Wrapper tag={"h2"}>
        <div className={styles.section}>
          <div className={styles.first}>
            <AnimatedLetter letter={"M"} delay={0.1} />
            <AnimatedLetter letter={"y"} delay={0.2} />
          </div>
          <div className={styles.second}>
            <AnimatedLetter letter={"P"} delay={0.3} />
            <AnimatedLetter letter={"o"} delay={0.4} />
            <AnimatedLetter letter={"r"} delay={0.5} />
            <AnimatedLetter letter={"t"} delay={0.6} />
            <AnimatedLetter letter={"f"} delay={0.7} />
            <AnimatedLetter letter={"o"} delay={0.8} />
            <AnimatedLetter letter={"l"} delay={0.9} />
            <AnimatedLetter letter={"i"} delay={1} />
            <AnimatedLetter letter={"o"} delay={1.1} />
          </div>
        </div>
      </Wrapper>

      <Wrapper tag={"p"}>
        <div className={styles.profileTxt}>
          A small gallery of recent projects.
          <span>
            These projects mainly focus on JavaScript, Frontend - React.Js ,
            Backend - Node.js.
          </span>
          <span>
            some of the work is freelance and based on single page application.
          </span>
          <span className={styles.subTxt}>
            interested to see some more? Visit{" "}
            <a href={"https://github.com/shmuel7e"}>
              <span>my work</span>
            </a>{" "}
            page.
          </span>
        </div>
      </Wrapper>
      <Wrapper tag={"section"}>
        <Grid />
      </Wrapper>
    </section>
  );
};
export default React.memo(MyPortfolio);
