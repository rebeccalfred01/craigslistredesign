import React from "react";
import Button from "../button/button.component";
import styles from "./header.module.css";
import becca from "../../assets/aaa.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={`flex ${styles.header} m-3`}>
      <div
        className={`text-2xl font-bold leading-normal mt-0 mb-2 text-pink-800 ${styles.rebeccapurple} inline-block`}
      >
        <Link to="/">Craigslist</Link>
      </div>
      <input
        placeholder="Search for a category or posting"
        className="h-10 m-auto w-1/2 shadow-lg appearance-none border border-gray-100 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline inline-block"
      />
      <Button buttonName={"Create Post +"} />
      <img
        src={becca}
        className="rounded-full border border-gray-100 shadow-sm"
        alt="profile"
      ></img>
    </div>
  );
};

export default Header;
