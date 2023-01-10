import React, { useState } from "react";

function WrongAnswer(props) {
  const { incorrect, answer } = props;
  const [background, setBackground] = useState(true);
  let data = { right: false, answer: answer, id: Math.random() };

  //styles for background when clicked
  let styles = {
    backgroundColor: !background && "#ef476f",
    color: !background && "white",
    boxShadow: !background && "0px 10px 10px rgba(239, 71, 111, .5)",
    border: !background && "none"
  };

  //increments count, doesn't give points, and changes background to red
  function handleClick(id) {
    incorrect(id);
    setBackground(false);
  }
  return (
    <div
      key={data.id}
      className="answer wrong"
      onClick={() => handleClick()}
      id={data.id}
      style={styles}
    >
      {data.answer}
    </div>
  );
}

export default WrongAnswer;
