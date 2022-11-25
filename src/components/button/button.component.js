import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${styles.rebeccapurple} h-10 mx-4 hover:bg-blue-700 text-white py-2 px-4 rounded-md`}
    >
      {props.buttonName}
    </button>
  );
};

export default Button;
