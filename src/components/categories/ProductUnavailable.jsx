import React from "react";
import Navbar from "../homepage/Navbar";

const ProductUnavailable = ({ heading, headingImg }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#198057] border h-[4rem] mt-[3rem] flex items-center justify-center gap-x-4">
        <img src={headingImg} alt={heading} className="w-[2.5rem] lg:w-[3rem]" />
        <h1 className="text-[#ffffff] text-[20px] lg:text-[24px] font-bold">{heading}</h1>
      </div>
      <div className="container mx-auto mt-[2.5rem] lg:mt-[3rem] mb-[5rem]">
        <p className="text-[20px] lg:text-[24px]">This product is currently unavailable 😢</p>
      </div>
    </div>
  );
};

export default ProductUnavailable;
