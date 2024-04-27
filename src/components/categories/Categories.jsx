import { useState } from "react";
import CategoriesCards from "./CategoriesCards";
import { RotatingLines } from "react-loader-spinner";

const Categories = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="mt-[3rem] lg:mt-[5rem]">
      <h1 className="mb-[1rem] lg:mb-[1.5rem] mx-3 lg:mx-0 text-[18px] lg:text-[24px] font-bold text-[#198057]">
        Shop by Category
      </h1>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <RotatingLines
            visible={true}
            height="30"
            width="30"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 mx-3 lg:mx-0 gap-3 lg:gap-0 lg:grid-cols-7 lg:justify-center">
          <CategoriesCards setIsLoading={setIsLoading} className="flex-grow" />
        </div>
      )}

      {/* <div className="grid grid-cols-3 mx-3 lg:mx-0 gap-3 lg:gap-y-[0.7rem] lg:gap-0 lg:grid-cols-6 2xl:grid-cols-7 lg:justify-center">
        <CategoriesCards setIsLoading={setIsLoading} className="flex-grow" />
      </div> */}
    </section>
  );
};

export default Categories;
