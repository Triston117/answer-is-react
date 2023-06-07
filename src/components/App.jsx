import React, { useState } from "react";
import data from "../testdata.js";
import Gameboard from "./Gameboard.jsx";
import Scoreboard from "./Scoreboard.jsx";
import Response from "./Response.jsx";

const App = () => {
  const [categories, setCategories] = useState(data.categories);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const handleResponse = (userResponse, isCorrect) => {
    // Handle the user's response and correctness here
    // Update the score and other state accordingly
    // You can use the setUserResponse, setScore, setCurrentQuestion, etc. functions
  };

  return (
    <div id="app">
      What is Reactor 2?
      <Gameboard
        categories={categories}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        answeredQuestions={answeredQuestions}
        setAnsweredQuestions={setAnsweredQuestions}
      />
      <Scoreboard score={score} />
      <Response onSubmit={handleResponse} />
    </div>
  );
};

export default App;
