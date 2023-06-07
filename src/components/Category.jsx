import React from "react";
import Clue from "./Clue.jsx";

const Category = (props) => {
  const title = props.category.title;
  const clues = props.category.clues;
  return (
    <div className="category" data-testid="category">
      <div className="categoryTitle">{title}</div>
      {clues.map((clue) => {
        const hasBeenAnswered = props.answeredQuestions.includes(clue.id);
        return (
          <Clue
            key={clue.id}
            clue={clue}
            onClueSelected={props.onClueSelected}
            hasBeenAnswered={hasBeenAnswered}
          />
        );
      })}
    </div>
  );
};

export default Category;
