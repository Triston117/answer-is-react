import React, { useState } from "react";
import data from "../testdata.js";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";
let test = test;
const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const handleResponse = (responseText) => {
    if (!currentQuestion.question) return;
    if (responseText === currentQuestion.answer) {
      setScore(score + currentQuestion.value);
    } else {
      setScore(score - currentQuestion.value);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion.id]);
    setCurrentQuestion({});
  };

  const handleClueSelected = (clue) => {
    setCurrentQuestion(clue);
  };
  //for commit
  return (
    <div id={"app"}>
      <Gameboard
        onClueSelected={handleClueSelected}
        categories={categories}
        currentQuestion={currentQuestion}
        answeredQuestions={answeredQuestions}
      />
      <Scoreboard score={score} />
      <Response
        onSubmit={handleResponse}
        isDisabled={currentQuestion.question === undefined}
      />
    </div>
  );
};

export default App;
