import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "../categories/Categories";
import PopularProducts from "./PopularProducts";
import OrderCard from "./OrderCard";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container mx-auto">
        <Hero />
        <Categories />
        <PopularProducts />
        <OrderCard />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Homepage;
