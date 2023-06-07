import React from "react";
import Category from "./Category.jsx";

const Categories = (props) => {
  return (
    <div id="categories" data-testid="categoryList">
      {props.categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          onClueSelected={props.onClueSelected}
          answeredQuestions={props.answeredQuestions}
        />
      ))}
    </div>
  );
};

export default Categories;
