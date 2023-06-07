import React from "react";
import Categories from "./Categories.jsx";

const Gameboard = (props) => {
  return (
    <div
      data-testid="gameboard"
      id={props.currentQuestion.question ? "question" : "gameboard"}
    >
      {props.currentQuestion.question ? (
        props.currentQuestion.question
      ) : (
        <Categories
          categories={props.categories}
          onClueSelected={props.onClueSelected}
          answeredQuestions={answeredQuestions}
        />
      )}
    </div>
  );
};

export default Gameboard;
