import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const LogoImage = ({ switchState }) => (
  <div
    className={`${styles.logoStyle} ${
      switchState ? styles.logoStyleBLACK : styles.logoStyleWHITE
    }`}
  >
    S
  </div>
);

const Logo = ({ delay, z, switchState }) => {
  const [isShown, setShown] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setShown("block");
    }, delay * 1600);
  }, [delay]);
  return (
    <span style={{ display: isShown, zIndex: z }}>
      {<LogoImage switchState={switchState} />}
    </span>
  );
};
export default React.memo(Logo);
