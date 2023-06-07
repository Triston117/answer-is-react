import React from "react";
import Clue from "./Clue";

const Category = (props) => {
  const { title, clues } = props.category;

  return (
    <div className="category" data-testid="category">
      <div className="categoryTitle">{title}</div>
      {clues.map((clue) => (
        <Clue
          key={clue.id}
          value={clue.value}
          question={clue.question}
          answered={clue.answered}
        />
      ))}
    </div>
  );
};

export default Category;
