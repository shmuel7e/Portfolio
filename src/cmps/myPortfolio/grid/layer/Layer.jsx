import React, { useCallback, useMemo } from "react";
import styles from "./styles.module.scss";

const Layer = ({
  className,
  onClick,
  current,
  setCurrent,
  uniqueKey,
  switchState,
}) => {
  const isCurrent = useMemo(() => current === uniqueKey, [current, uniqueKey]);

  const handleClick = useCallback(() => {
    if (isCurrent) {
      onClick();
    } else {
      setCurrent(uniqueKey);
    }
  }, [setCurrent, isCurrent, uniqueKey, onClick]);

  return (
    <div className={styles.imageBox} onClick={handleClick}>
      <div
        className={`${styles.imageContainer} ${styles[className]} ${
          isCurrent ? styles.zoom : styles.zoomOut
        }`}
      ></div>
      <div
        className={`${styles.overlay} ${
          isCurrent ? styles.overlayCurrent : ""
        }`}
      ></div>
      {isCurrent && (
        <div
          className={`${styles.content} ${
            switchState ? styles.contentWHITE : styles.contentBLACK
          }`}
          onClick={onClick}
        >
          <p>View Project </p>
        </div>
      )}
    </div>
  );
};
export default React.memo(Layer);
