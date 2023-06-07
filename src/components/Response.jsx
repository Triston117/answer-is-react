import React, { useState } from "react";

const Response = (props) => {
  const [userResponse, setUserResponse] = useState("");

  const recordResponse = (event) => {
    setUserResponse(event.target.value);
  };

  const submitResponse = (event) => {
    if (event.key === "Enter") {
      // Check if the user response is correct
      const isCorrect =
        /* Perform your logic to check correctness */

        // Call the onSubmit callback with the user response and correctness
        props.onSubmit(userResponse, isCorrect);

      // Clear the input field
      setUserResponse("");
    }
  };

  return (
    <div id="response" data-testid="response">
      <input
        type="text"
        placeholder="Answers go here!"
        value={userResponse}
        onChange={recordResponse}
        onKeyDown={submitResponse}
      />
    </div>
  );
};

export default Response;
