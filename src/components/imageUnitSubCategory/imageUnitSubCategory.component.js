import React from "react";
import styles from "./imageUnitSubCategory.module.css";

const ImageUnitSubCategory = (props) => {
  return (
    <div
      className={`${styles.pickgradient} relative flex justify-center align-center h-full w-full mx-4 inline-block clearfix overflow-hidden`}
    >
      <img
        className={`${styles.filteRadius} aspect-square block`}
        src={props.imagePath}
        alt={props.alt}
      />
      <div
        className={`absolute w-full h-full text-center text-white text-3xl z-10 font-bold ${styles.center}`}
      >
        {props.text}
      </div>
    </div>
  );
};

export default ImageUnitSubCategory;
