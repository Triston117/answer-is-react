import React from "react";
import Categories from "./Categories.jsx";

const Gameboard = ({
  currentQuestion,
  categories,
  onClueSelected,
  answeredQuestions,
}) => {
  return (
    <div
      data-testid="gameboard"
      id={currentQuestion.question ? "question" : "gameboard"}
    >
      {currentQuestion.question ? (
        currentQuestion.question
      ) : (
        <Categories
          categories={categories}
          onClueSelected={onClueSelected}
          answeredQuestions={answeredQuestions}
        />
      )}
    </div>
  );
};

export default Gameboard;
