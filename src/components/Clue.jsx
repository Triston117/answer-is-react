import React from "react";

const Clue = (props) => {
  const value = props.clue.value;
  const handleClick = () => {
    props.onClueSelected(props.clue);
  };

  return (
    <div onClick={handleClick} className="clueValue" data-testid="value">
      {props.hasBeenAnswered ? "" : `$${value}`}${value}
    </div>
  );
};

export default Clue;
