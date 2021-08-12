import React, { useEffect, useState } from "react";
import LogoImage from "../../assets/logo/logo.png";
import LogoImageWhite from "../../assets/logo/logoWhite.png";

const Logo = ({ delay, theme = "default", z }) => {
  const [isShown, setShown] = useState("none");
  useEffect(() => {
    setTimeout(() => {
      setShown("block");
    }, delay * 1600);
  }, [delay]);
  return (
    <img
      style={{ display: isShown, zIndex: z }}
      src={theme === "default" ? LogoImageWhite : LogoImage}
      alt="S"
    ></img>
  );
};

export default React.memo(Logo);
