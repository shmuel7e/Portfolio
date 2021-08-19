import React, { useCallback, useEffect } from "react";
import styles from "./styles.module.scss";
import { CgToggleOn } from "react-icons/cg";
import { CgToggleOff } from "react-icons/cg";

const Switch = ({ switchState, setSwitchState }) => {
  const handleClick = useCallback(() => {
    setSwitchState((prevState) => {
      localStorage.setItem("color", !prevState);
      return !prevState;
    });
  }, [setSwitchState]);

  const handleColors = useCallback(() => {
    switchState
      ? (document.body.style.backgroundColor = "rgb(255 255 255)")
      : (document.body.style.backgroundColor = "#1d1d1d");
  }, [switchState]);

  useEffect(() => {
    handleColors();
  }, [switchState, handleColors]);

  return (
    <div
      className={`${styles.container} ${switchState ? styles.on : styles.off}`}
      onClick={handleClick}
    >
      <div className={styles.switch}>
        {switchState ? <CgToggleOn /> : <CgToggleOff />}
      </div>
      <div>{switchState ? "on" : "off"}</div>
    </div>
  );
};

export default React.memo(Switch);
