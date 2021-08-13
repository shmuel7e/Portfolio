import React, { Suspense } from "react";
import styles from "./styles.module.scss";
import Wrapper from "../cmps/wrapper";
import Spinner from "../cmps/spinner";
import MyPortfolio from "../cmps/myPortfolio";
import About from "../cmps/about";
import Burger from '../cmps/burger';
const Intro = React.lazy(() => import("../cmps/into"));

const Home = () => (
  <section className={styles.home}>
    <Burger/>
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
                <Intro />
                <MyPortfolio />
                <About />
              </Suspense>
            </div>
          }
        </Wrapper>
      </div>
    </Wrapper>
  </section>
);

export default Home;
