import React from "react";
import styles from "./styles.module.scss";
import AnimatedLetter from "../animatedLetter";
import Wrapper from "../../cmps/wrapper";
import myProfile from "../../assets/images/profile.jpg";
import olyaBridal from '../../assets/images/olyaBridal.PNG';
import taskIt from '../../assets/images/taskIt.PNG';
import mines from '../../assets/images/mines.PNG';
import soundx from '../../assets/images/soundX.PNG';

// const isElementInViewport = (el) => {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight ||
//         document.documentElement.clientHeight) /* or $(window).height() */ &&
//     rect.right <=
//       (window.innerWidth ||
//         document.documentElement.clientWidth) /* or $(window).width() */
//   );
// };

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
      <Wrapper tag={"img"}>
        <div className={styles.profile}>
          <img src={myProfile} alt=""></img>
        </div>
      </Wrapper>
      <Wrapper tag={"p"}>
        <div className={styles.profileTxt}>
          <span>Experienced Full Stack Engineer. </span>
          <span> adept in all stages of web development.</span>
          <span>
            Knowledgeable in user interface, testing and debugging processes.
          </span>
          <span>
            Able to effectively self-manage during independent projects, as well
            as collaborate in a team setting.
          </span>
        </div>
      </Wrapper>
      <div className={styles.portfolioContainer}>
        <Wrapper tag={"section"}>
          <div className={styles.portfolio}>
            <img  onClick={()=>  window.location = "http://www.olyabridal.com" } src={olyaBridal} alt=""></img>
            <img  onClick={()=>  window.location = "https://app-taskit.herokuapp.com/guest" }src={taskIt} alt=""></img>
            <img  onClick={()=>  window.location = "https://shmuelmusicx.netlify.app/" } src={soundx} alt=""></img>
            <img  onClick={()=>  window.location = "https://shmuelminesweeper.netlify.app/" } src={mines} alt=""></img>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
export default React.memo(MyPortfolio);

