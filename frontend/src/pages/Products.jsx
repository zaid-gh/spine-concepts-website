import React, { useState } from "react";
import { CategoryList, ProductGrid } from "../components";
import mockData from "../data/mockData";

const Products = () => {
  const { categories } = mockData;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts =
    selectedCategory === null
      ? categories.flatMap((category) => category.products)
      : categories.find((cat) => cat.name === selectedCategory)?.products || [];

  const handleCategorySelect = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <section className="w-full">
      <div
        className="flex flex-col mx-auto min-h-screen max-w-screen-xl pt-28 pb-28 gap-8
      lg:flex-row lg:w-5/6 lg:justify-center"
      >
        <div
          className="w-full
        lg:w-1/4"
        >
          <CategoryList onCategorySelect={handleCategorySelect} />
        </div>
      </div>
    </section>
  );
};

export default Products;
