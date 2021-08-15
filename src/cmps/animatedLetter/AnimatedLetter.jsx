import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const AnimatedLetter = ({ letter, delay, left, z, fontFamily }) => {
  const [shownState, setShownState] = useState("none");

  useEffect(() => {
    setTimeout(() => {
      setShownState("block");
    }, delay * 900);
  }, [delay]);

  return (
    <div
      className={styles.letter}
      style={{
        display: shownState,
        marginLeft: `${left}px`,
        zIndex: z,
        fontFamily: fontFamily,
      }}
    >
      {letter}
    </div>
  );
};

export default React.memo(AnimatedLetter);
