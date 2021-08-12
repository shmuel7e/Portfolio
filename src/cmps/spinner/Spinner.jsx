import React from "react";
import SpinnerImage from "../../assets/animation/spinner.png";

const Spinner = () => (
    <img src={SpinnerImage} alt="Loading..." />
);
export default React.memo(Spinner);
