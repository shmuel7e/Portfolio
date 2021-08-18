import React, { Suspense, useState } from "react";
import styles from "./styles.module.scss";
import Wrapper from "../cmps/wrapper";
import Spinner from "../cmps/spinner";
import MyPortfolio from "../cmps/myPortfolio";
import About from "../cmps/about";
import Burger from "../cmps/burger";
import Switch from "../cmps/switch";
const Intro = React.lazy(() => import("../cmps/into"));

const Home = () => {
  const [switchState, setSwitchState] = useState(
    JSON.parse(localStorage.getItem("color")) || false
  );
  return (
    <section className={styles.home}>
      <Burger switchState={switchState} />
      <Switch switchState={switchState} setSwitchState={setSwitchState} />
      <Wrapper tag={"html"}>
        <div className={styles.html}>
          <Wrapper tag={"body"}>
            {
              <div className={styles.body}>
                <Suspense
                  fallback={
                    <div className={styles.spinner}>
                      <Spinner />
                    </div>
                  }
                >
                  <Intro switchState={switchState} />
                  <MyPortfolio switchState={switchState} />
                  <About switchState={switchState} />
                </Suspense>
              </div>
            }
          </Wrapper>
        </div>
      </Wrapper>
    </section>
  );
};

export default Home;
