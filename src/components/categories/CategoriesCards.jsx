import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categoryPaths = {
  Fruits: "/fruits",
  Vegetables: "/vegetables",
  "Chicken & Egg": "/chicken-egg",
  Bakery: "/bakery",
  Grains: "/grains",
  "Milk & Juice": "/milk-juice",
  "Personal Care": "/personal-care",
};

const CategoriesCards = ({ setIsLoading, className = "" }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

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
      } finally {
        console.log("Setting isLoading to false");
        setIsLoading(false);
      }
    };
    fetchCategoriesCards();
  }, [setIsLoading]);

  return categoryProducts.map((item) => (
    <div
      key={item.id}
      className={`group lg:w-[12.25rem] w-full h-[6.6rem] bg-[#E5F3EA] flex flex-col justify-center items-center hover:bg-[#198057] rounded-[0.8rem] ${className}`}
    >
      <Link to={categoryPaths[item.name] || "/"}>
        <img
          src={`https://backendgrocery.000webhostapp.com${item.icon}`}
          alt={item.name}
          className="w-[2.5rem] group-hover:scale-125 transition-transform duration-300"
        />
        <p className="font-bold text-[#198057] text-[13px] lg:text-[16px] text-center group-hover:text-white mt-2">
          {item.name}{" "}
        </p>
      </Link>
    </div>
  ));
};

export default CategoriesCards;
