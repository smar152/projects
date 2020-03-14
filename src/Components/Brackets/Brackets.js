import React from "react";

const brackets = () => {
  function checkBrackets(e) {
    const userInput = e.target.value;

    console.log(userInput);
  }

  return (
    <div>
      <input type="text" onInput={checkBrackets} />
    </div>
  );
};

export default brackets;
