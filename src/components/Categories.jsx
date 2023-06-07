import React from "react";
import Category from "./Category";

const Categories = (props) => {
  const { categories } = props;

  return (
    <div id="categories" data-testid="categoryList">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
