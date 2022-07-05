import React, { useState, useEffect } from "react";
import Categories from "./components/Categories";
import SpecificCategory from "./components/SpecificCategory";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {

  }, [selectedCategory])

  return (
    !selectedCategory ? <Categories setSelectedCategory={setSelectedCategory}/> : <SpecificCategory category={selectedCategory}/>
  );
};

export default Products;
