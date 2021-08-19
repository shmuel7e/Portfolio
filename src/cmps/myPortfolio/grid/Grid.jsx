import React, { useState } from "react";
import styles from "./styles.module.scss";
import Layer from "./layer";

const layers = [
  {
    key: 1,
    onClick: () => (window.location = "http://www.olyabridal.com"),
    className: "olyaBridal",
  },
  {
    key: 2,
    onClick: () => (window.location = "https://app-taskit.herokuapp.com/guest"),
    className: "taskIt",
  },
  {
    key: 3,
    onClick: () => (window.location = "https://shmuelmusicx.netlify.app/"),
    className: "musicX",
  },
  {
    key: 4,
    onClick: () => (window.location = "https://shmuelminesweeper.netlify.app/"),
    className: "mines",
  },
  {
    key: 5,
    onClick: () =>
      (window.location = "https://shmuel7e.github.io/shmuel-elkis-27-11-2020"),
    className: "weather",
  },
  {
    key: 6,
    onClick: () =>
      (window.location = "https://shmuel7e.github.io/shmuel-elkis-27-11-2020"),
    className: "graduation",
  },
];

const Grid = ({ switchState }) => {
  const [current, setCurrent] = useState(null);
  return (
    <section className={styles.grid}>
      {layers.map((layer) => (
        <Layer
          key={layer.key}
          className={layer.className}
          onClick={layer.onClick}
          current={current}
          setCurrent={setCurrent}
          uniqueKey={layer.key}
          switchState={switchState}
        />
      ))}
    </section>
  );
};
export default React.memo(Grid);
