import React from "react";
import styles from "./styles.module.scss";
import Wrapper from "../wrapper";
import myProfile from "../../assets/images/profile.jpg";
import AnimatedLetter from "../animatedLetter";

const About = () => (
  <section classNamee={styles.container}>
    <Wrapper tag={"h2"}>
      <div className={styles.section}>
        <div className={styles.first}>
          <AnimatedLetter letter={"A"} delay={0.1} />
          <AnimatedLetter letter={"b"} delay={0.2} />
          <AnimatedLetter letter={"o"} delay={0.3} />
          <AnimatedLetter letter={"u"} delay={0.4} />
          <AnimatedLetter letter={"t"} delay={0.5} />
        </div>
        <div className={styles.second}>
          <AnimatedLetter letter={"M"} delay={0.6} />
          <AnimatedLetter letter={"e"} delay={0.7} />
        </div>
      </div>
    </Wrapper>
    <Wrapper tag={"img"}>
      <div className={styles.profile}>
        <img src={myProfile} alt=""></img>
      </div>
    </Wrapper>
    <Wrapper tag={"p"}>
      <div className={styles.profileTxt}>
        <span>Experienced Full Stack Web Engineer B.Sc. </span>
        <span> adept in all stages of web development.</span>
        <span>
          Knowledgeable in user interface, testing and debugging processes.
        </span>
        <span>
          Able to effectively self - manage during independent projects, as well
          as collaborate in a team setting.
        </span>
      </div>
    </Wrapper>
  </section>
);

export default React.memo(About);
