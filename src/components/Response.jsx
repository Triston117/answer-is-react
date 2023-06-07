import React, { useState } from "react";

const Response = ({ onSubmit }) => {
  const [userResponse, setUserResponse] = useState("");

  const recordResponse = (event) => {
    setUserResponse(event.target.value);
  };

  const submitResponse = (event) => {
    event.preventDefault();
    onSubmit(userResponse);
    setUserResponse();
  };

  return (
    <div id="response" data-testid="response">
      <form onSubmit={submitResponse}>
        <input
          type="text"
          placeholder="Answers go here!"
          value={userResponse}
          onChange={recordResponse}
          // handle data change
          // handle when 'enter' is hit
        />
      </form>
    </div>
  );
};

export default Response;
