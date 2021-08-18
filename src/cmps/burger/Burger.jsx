import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";

const Burger = ({ switchState }) => {
  const [stateIsOpen, setStateIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setStateIsOpen((prevStateIsOpen) => !prevStateIsOpen);
  }, []);
  return (
    <div
      onClick={handleOpen}
      className={`${styles.navBurger} ${
        stateIsOpen ? styles["menuOpen"] : ""
      } ${switchState ? styles.navBurgerWHITE : styles.navBurgerBLACK}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default React.memo(Burger);
