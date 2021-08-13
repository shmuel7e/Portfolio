import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const LogoImage = () => <div className={styles.logoStyle}>S</div>;

const Logo = ({ delay, theme = "default", z }) => {
  const [isShown, setShown] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setShown("block");
    }, delay * 1600);
  }, [delay]);
  return (
    <span style={{ display: isShown, zIndex: z }}>
      {theme === "default" ? <LogoImage /> : <LogoImage />}
    </span>
  );
};
export default React.memo(Logo);
