import React from "react";
import styles from "./styles.module.scss";
import Layer from "./layer";

const Grid = ({
  layers = [
    { key: 1 },
    { key: 2 },
    { key: 3 },
    { key: 4 },
    { key: 5 },
    { key: 6 },
  ],
}) => (
  <section className={styles.grid}>
    {layers.map((layer) => (
      <Layer key={layer.key} />
    ))}
  </section>
);
export default React.memo(Grid);
