import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Fruits from "../../assets/images/orange.png";
import Vegetables from "../../assets/images/veggies.png";
import MilkJuice from "../../assets/images/milk.png";
import Bread from "../../assets/images/bread.png";
import PCare from "../../assets/images/personal-care.png";
import Grains from "../../assets/images/grain.png";
import Chicken from "../../assets/images/chicken.png";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const menuRef = useRef(null);

  function handleClick() {
    setIsmenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function hancleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsmenuOpen(false);
      }
    }
    document.addEventListener("mousedown", hancleClickOutside);
    return () => {
      document.removeEventListener("mousedown", hancleClickOutside);
    };
  }, [menuRef]);

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`flex items-center justify-between p-3 lg:p-6 border-b sticky top-0 z-[999] ${
          isSticky ? "bg-[#000] opacity-10" : ""
        }`}
      >
        <div className="flex items-center space-x-8">
          <img
            src={Logo}
            alt="Grocery Store Logo"
            loading="lazy"
            className="w-[7rem] lg:w-[9rem]"
          />
          <div
            ref={menuRef}
            className="relative lg:inline-block text-left hidden"
          >
            <div>
              <button
                type="button"
                className="inline-flex outline-none border-none w-full justify-center gap-x-1.5 rounded-full bg-slate-200 px-12 py-3 text-sm font-bold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM6 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Category
              </button>
            </div>
            {/* drop-down menu starts here... */}
            {isMenuOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-[11.5rem] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <p
                    className="text-gray-700 block px-4 py-2 text-sm font-bold"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Browse Category
                  </p>
                </div>
                <div className="py-1" role="none">
                  <Link
                    to="/"
                    className="text-gray-700 px-4 py-2 text-sm flex items-center gap-x-3 text-[18px]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    <img src={Fruits} alt="Fruits" className="w-[1.5rem]" />{" "}
                    Fruits
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-700 px-4 py-2 text-sm flex items-center gap-x-3 text-[18px]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    <img
                      src={Vegetables}
                      alt="Vegetables"
                      className="w-[1.5rem]"
                    />{" "}
                    Vegetables
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-700 px-4 py-2 text-sm flex items-center gap-x-3 text-[18px]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-4"
                  >
                    <img
                      src={MilkJuice}
                      alt="MilkJuice"
                      className="w-[1.5rem]"
                    />{" "}
                    Milk-Juice
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-700 px-4 py-2 text-sm flex items-center gap-x-3 text-[18px]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-5"
                  >
                    <img src={Bread} alt="Bread" className="w-[1.5rem]" />{" "}
                    Bakery
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-700 px-4 py-2 text-sm flex items-center gap-x-3 text-[18px]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-5"
                  >
                    <img
                      src={PCare}
                      alt="Personal Care"
                      className="w-[1.5rem]"
                    />{" "}
                    Personal Care
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-700 px-4 py-2 text-sm flex items-center gap-x-3 text-[18px]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-5"
                  >
                    <img src={Grains} alt="Grains" className="w-[1.5rem]" />{" "}
                    Grains
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-700 px-4 py-2 text-sm flex items-center gap-x-3 text-[18px]"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-5"
                  >
                    <img src={Chicken} alt="Chicken" className="w-[1.5rem]" />{" "}
                    Chicken & Egg
                  </Link>
                </div>
              </div>
            )}
          </div>
          <form
            action="#"
            method="post"
            className="relative hidden lg:inline-block"
          >
            <input
              type="text"
              placeholder="Search"
              className="border py-3 px-10 rounded-full w-[18rem] outline-none"
            />
            <button type="submit" className="absolute left-3 top-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-6">
          <>
            <CartIcon />
          </>
          <button
            type="button"
            className="bg-[#198057] text-[#ffffff] py:2 md:py-3 px-9 rounded-full"
          >
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
