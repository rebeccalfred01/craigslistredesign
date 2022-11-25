import React from "react";
import generateKey from "../../utils/generateKey.helper";

const FilterCheckbox = (props) => {
  const render = () => {
    return props.items.map((item) => {
      let id = generateKey();
      return (
        <>
          <div key={generateKey()} className="form-check w-full">
            <input
              key={generateKey()}
              id={id}
              type="checkbox"
              value=""
              className="form-check-input e h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            />
            <label
              key={generateKey()}
              for={id}
              className="form-check-label inline-block text-gray-800"
            >
              {item}
            </label>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div className="font-bold">{props.title}</div>
      <div className="flex flex-wrap flex-column  mb-4">{render()}</div>
    </>
  );
};

export default FilterCheckbox;
