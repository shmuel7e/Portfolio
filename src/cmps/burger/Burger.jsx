import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";

const Burger = () => {
  const [stateIsOpen, setStateIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setStateIsOpen((prevStateIsOpen) => !prevStateIsOpen);
  }, []);
  return (
    <div
      onClick={handleOpen}
      className={`${styles.navBurger} ${
        stateIsOpen ? styles["menuOpen"] : ""
      } `}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default React.memo(Burger);
