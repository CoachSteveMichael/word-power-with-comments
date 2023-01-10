import React, { useState } from "react";
import Answers from "./Answers";
import { result, wrong } from "./data";
import { connect } from "react-redux";

function Card(props) {
  //state for the quiz questions set with the object from data.js
  const [questions, setQuestions] = useState(result);
  //count state... use this for the index of the question being displayed
  const [count, setCount] = useState(0);
  //this is just state for score
  const [score, setScore] = useState(0);

  //returns a randomly selected wrong answer from the wrong array
  function wrongAnswer() {
    let random = Math.floor(Math.random() * wrong.length);
    return wrong[random];
  }

  //increments count by 1, and remounts answer component with next question
  function nextButton() {
    setCount((prevCount) => (prevCount += 1));
  }

  //array of questions mapped with the Answer component
  let answerElements = questions.map((ele, index) => (
    <Answers
      answer={ele.korean}
      points={ele.points}
      id={ele.id}
      key={ele.id}
      prompt={ele.english}
      wrong={wrongAnswer}
      questions={questions}
      setScore={setScore}
      setCount={setCount}
    />
  ));

  return (
    <div className="card">
      <div className="current">
        {count + 1} / {answerElements.length}
      </div>
      {count < answerElements.length ? (
        <div className="inner-card">
          <div className="prompt">{questions[count].english}</div>
          <div className="question">?</div>
          {answerElements[count]}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default connect()(Card);
