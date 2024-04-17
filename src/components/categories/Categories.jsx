import CategoriesCards from "./CategoriesCards";

const Categories = () => {
  return (
    <section className="mt-[3rem] lg:mt-[5rem]">
      <h1 className="mb-[1rem] lg:mb-[1.5rem] text-[18px] lg:text-[24px] font-bold text-[#198057]">
        Shop by Category
      </h1>
      <div className="flex sm:flex-wrap lg:flex-nowrap gap-4 lg:gap-0 lg:gap-x-4 justify-center">
        <CategoriesCards className="flex-grow" />
      </div>
    </section>
  );
};

export default Categories;
