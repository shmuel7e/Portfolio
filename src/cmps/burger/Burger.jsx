import React, { useCallback, useState } from "react";
import styles from "./styles.module.scss";

const Burger = ({ switchState, setIsOpen }) => {
  const [stateIsOpen, setStateIsOpen] = useState(false);
  
  const handleOpen = useCallback(() => {
    setStateIsOpen((prevStateIsOpen) => !prevStateIsOpen);
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

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
