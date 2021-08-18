import React, { Suspense, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Wrapper from "../wrapper";
import Scroll from "../scroll";

const AnimatedTitle = React.lazy(() => import("../animatedTitle"));
const SubTitle = React.lazy(() => import("../subtitle"));
const Button = React.lazy(() => import("../button"));

const Intro = ({ switchState }) => {
  const [shouldDisplay2, setShouldDisplay2] = useState(false);
  const [shouldDisplay3, setShouldDisplay3] = useState(false);

  useEffect(() => {
    setTimeout(() => setShouldDisplay2(true), 1000);
    setTimeout(() => setShouldDisplay3(true), 1500);
  }, []);

  return (
    <section className={styles.intro}>
      <Scroll direction={"right"} switchState={switchState} />
      <Scroll direction={"left"} switchState={switchState} />
      <div className={styles.title}>
        <Wrapper tag={"h1"}>
          {
            <Suspense fallback={<div style={{ minHeight: "87px" }}></div>}>
              <AnimatedTitle switchState={switchState} />
            </Suspense>
          }
        </Wrapper>
      </div>
      {shouldDisplay2 && (
        <div className={styles.p}>
          <Wrapper tag={"p"}>
            {
              <Suspense fallback={<div style={{ minHeight: "15px" }}></div>}>
                <SubTitle switchState={switchState} />
              </Suspense>
            }
          </Wrapper>
        </div>
      )}
      {shouldDisplay3 && (
        <div className={styles.p}>
          <Wrapper tag={"button"}>
            {
              <Suspense fallback={<div style={{ minHeight: "35px" }}></div>}>
                <Button switchState={switchState} />
              </Suspense>
            }
          </Wrapper>
        </div>
      )}
    </section>
  );
};
export default React.memo(Intro);
