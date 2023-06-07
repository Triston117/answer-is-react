import React from "react";

const Clue = (props) => {
  const { value, question, answered } = props;

  if (answered) {
    // If the clue has been answered, render an empty screen
    return <div className="clueValue" data-testid="value"></div>;
  } else if (question) {
    // If the clue has a question, render the question
    return (
      <div className="clueValue" data-testid="value">
        {question}
      </div>
    );
  } else {
    // If the clue doesn't have a question, render the value
    return (
      <div className="clueValue" data-testid="value">
        ${value}
      </div>
    );
  }
};

export default Clue;
