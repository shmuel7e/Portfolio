import React from "react";
import styles from "./styles.module.scss";
import AnimatedLetter from "../animatedLetter";
import Wrapper from "../wrapper";
import olyaBridal from "../../assets/images/olyaBridal.PNG";
import taskIt from "../../assets/images/taskIt.PNG";
import mines from "../../assets/images/mines.PNG";
import soundx from "../../assets/images/soundX.PNG";
import weather from "../../assets/images/weather.PNG";
import arduino from "../../assets/images/arduino.PNG";
import Grid from "./grid";
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

{
  /* <div className={styles.portfolio}>
<div>
  <img
    onClick={() => (window.location = "http://www.olyabridal.com")}
    src={olyaBridal}
    alt=""
  ></img>
</div>
<div>
  <img
    onClick={() =>
      (window.location = "https://app-taskit.herokuapp.com/guest")
    }
    src={taskIt}
    alt=""
  ></img>
</div>
<div>
  <img
    onClick={() =>
      (window.location = "https://shmuelmusicx.netlify.app/")
    }
    src={soundx}
    alt=""
  ></img>
</div>
<div>
  <img
    onClick={() =>
      (window.location = "https://shmuelminesweeper.netlify.app/")
    }
    src={mines}
    alt=""
  ></img>
</div>
<div>
  <img
    onClick={() =>
      (window.location =
        "https://shmuel7e.github.io/shmuel-elkis-27-11-2020")
    }
    src={weather}
    alt=""
  ></img>
</div>
<div>
  <img
    onClick={() =>
      (window.location =
        "https://shmuel7e.github.io/shmuel-elkis-27-11-2020")
    }
    src={arduino}
    alt=""
  ></img>
</div>
</div> */
}
