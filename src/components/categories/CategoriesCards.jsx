import { useState, useEffect } from "react";

const CategoriesCards = ({ className = "" }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchCategoriesCards = async () => {
      try {
        const response = await fetch(
          `https://backendgrocery.000webhostapp.com/api/v1/categories`
        );
        const data = await response.json();
        console.log("API Response:", data);

        if (Array.isArray(data.data)) {
          setCategoryProducts(data.data);
        } else {
          console.error("Expected data to be an array, received:", data);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategoryProducts([]);
      }
    };
    fetchCategoriesCards();
  }, []);
  return categoryProducts.map((items) => (
    <div
      key={items.id}
      className={`group lg:w-[12.25rem] w-[6.4rem] h-[6.6rem] bg-[#E5F3EA] flex flex-col justify-center items-center hover:bg-[#198057] rounded-[0.8rem] ${className}`}
    >
      <img
        src={`https://backendgrocery.000webhostapp.com${items.icon}`}
        alt={items.name}
        className="w-[2.5rem] group-hover:scale-125 transition-transform duration-300"
      />
      <p className="font-bold text-[#198057] text-[13px] lg:text-[16px] text-center group-hover:text-white mt-2">
        {items.name}{" "}
      </p>
    </div>
  ));
};

export default CategoriesCards;
