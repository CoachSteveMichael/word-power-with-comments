import React from "react";

function Start(props) {
  const { startGame } = props;

  return (
    <div className="home">
      <h1 className="top">Word</h1>
      <h1 className="bottom">Power</h1>
      <div className="start" onClick={() => startGame()}>
        Start
      </div>
    </div>
  );
}

export default Start;
