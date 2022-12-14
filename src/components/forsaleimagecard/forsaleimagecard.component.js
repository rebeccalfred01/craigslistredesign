import React from "react";
import { Filledstar } from "../../assets/svg/star.svg";

const ForSaleImage = (props) => {
  return (
    <div className="w-[20rem] m-5 bg-white rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={props.imageurl} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.cost}
        </p>
        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#663399] rounded-lg hover:bg-[#663389]  focus:ring-4 focus:outline-none focus:ring-[#663399] ">
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default ForSaleImage;
