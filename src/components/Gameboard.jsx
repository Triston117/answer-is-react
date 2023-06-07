import React from "react";
import Clue from "./Clue.jsx";
import Categories from "./Categories.jsx";

const Gameboard = (props) => {
  const { currentQuestion, categories } = props;

  return (
    <div
      data-testid="gameboard"
      id={currentQuestion.question ? "question" : "gameboard"}
    >
      {currentQuestion.question ? (
        // A question was clicked, show clue
        <Clue
          value={currentQuestion.value}
          question={currentQuestion.question}
          answered={currentQuestion.answered}
        />
      ) : (
        // No question clicked, show categories
        <Categories categories={categories} />
      )}
    </div>
  );
};

export default Gameboard;
