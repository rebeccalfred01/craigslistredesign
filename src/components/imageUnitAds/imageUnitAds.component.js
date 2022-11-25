import React from "react";
import styles from "./imageUnitAds.module.css";

const ImageUnitAds = (props) => {
  return (
    <div
      className={`${styles.pickgradient} relative mx-4 inline-block clearfix`}
    >
      <img
        className={`${styles.filteRadius} aspect-square block`}
        src={props.imagePath}
        alt={props.alt}
      />
      <div className="absolute bottom-3 text-white z-10 mb-2 mx-4">
        {props.text}
      </div>
    </div>
  );
};

export default ImageUnitAds;
