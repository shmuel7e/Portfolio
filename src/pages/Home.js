import React, { Suspense, useState } from "react";
import styles from "./styles.module.scss";
import Wrapper from "../cmps/wrapper";
import Spinner from "../cmps/spinner";
import MyPortfolio from "../cmps/myPortfolio";
import About from "../cmps/about";
import Burger from "../cmps/burger";
import Switch from "../cmps/switch";
import Popup from "../cmps/popup";

const Intro = React.lazy(() => import("../cmps/into"));

const Home = () => {
  const [switchState, setSwitchState] = useState(
    JSON.parse(localStorage.getItem("color")) || false
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.home}>
      <Popup switchState={switchState} isOpen={isOpen} />
      <Burger switchState={switchState} setIsOpen={setIsOpen} />
      <Switch switchState={switchState} setSwitchState={setSwitchState} />
      {!isOpen && (
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
      )}
    </section>
  );
};

export default Home;
