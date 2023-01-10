import React from "react";
import RightAnswer from "./RightAnswer";
import WrongAnswer from "./WrongAnswer";

function Answers(props) {
  const { wrong, questions, setScore, setCount, id, answer } = props;

  //checks if answer is right, then increment score and count to prompt next question
  function selectAnswer(id) {
    for (let i = 0; i < questions.length; i++) {
      if (id === questions[i].id) {
        setTimeout(() => {
          setScore((prevScore) => (prevScore += 10));
          setCount((prevCount) => (prevCount += 1));
        }, 500);
      }
    }
  }

  //checks if answer is incorrect, increments count
  function incorrect(id) {
    setTimeout(() => {
      setCount((prevCount) => (prevCount += 1));
    }, 500);
  }

  //array of wrong answer and right answer comopnent jsx
  let answerElements = [
    <WrongAnswer answer={wrong()} incorrect={incorrect} />,
    <WrongAnswer answer={wrong()} incorrect={incorrect} />,
    <WrongAnswer answer={wrong()} incorrect={incorrect} />,
    <RightAnswer handleClick={selectAnswer} answer={answer} id={id} />
  ];

  //shuffle function which, to be honest, I found online
  function shuffle(array) {
    var m = array.length,
      t,
      i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

  answerElements = shuffle(answerElements);

  return <div className="answers">{answerElements}</div>;
}

export default Answers;
