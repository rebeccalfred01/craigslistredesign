import React from "react";

const PriceRange = () => {
  return (
    <>
      <div className="Price font-bold ">Price</div>
      <div className="Prices mb-2 ">Under ₹2,000</div>
      <div className="Prices mb-2 ">₹2,000 - ₹5,000</div>
      <div className="Prices mb-2">₹5,000 - ₹10,000</div>
      <div className="Prices mb-2">₹10,000 - ₹20,000</div>
      <div className="Prices mb-2">Over ₹20,000</div>

      <input
        placeholder="min"
        className="h-10  w-1/4 shadow-lg appearance-none border border-gray-100 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline inline-block"
      />
      <input
        placeholder="max"
        className="h-10 m-4 w-1/4 shadow-lg appearance-none border border-gray-100 rounded-md w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline inline-block"
      />
    </>
  );
};

export default PriceRange;
