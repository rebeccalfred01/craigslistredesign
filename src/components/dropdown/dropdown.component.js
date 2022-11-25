import React from "react";
import Categories from "../categories/categories.component";
import styles from "./dropdown.module.css";
import data from "../../constants/dropdown.constants.json";
import generateKey from "../../utils/generateKey.helper";

const Dropdown = () => {
  const render = () => {
    return data.map((item) => {
      return (
        <Categories title={item.title} items={item.items} key={generateKey()} />
      );
    });
  };

  return <div className={`${styles.rebeccapurple} flex h-12`}>{render()}</div>;
};

export default Dropdown;
